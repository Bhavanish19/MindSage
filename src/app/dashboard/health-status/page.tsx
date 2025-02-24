// @ts-nocheck

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib";
import { currentUser } from "@clerk/nextjs/server";
import { Activity, Brain, Heart, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Droplet, Edit, UserCircle, Weight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const HealthStatusPage = async () => {
  const user = await currentUser();

  const dbUser = await db.user.findUnique({ where: { id: user?.id } });

  if (!dbUser) return null;

  const { age, bloodGroup, height, weight, gender, medicalIssues } = dbUser;

  const symptoms = await db.symptom.findMany({
    where: { userId: user?.id },
  });

  const medications = await db.medication.findMany({
    where: { userId: user?.id },
  });

  const mentalWellness = await db.mentalWellness.findMany({
    where: { userId: user?.id },
  });

  const emojiMap = {
    HAPPY: "/emoji/HAPPY.png",
    SAD: "/emoji/SAD.png",
    ANGRY: "/emoji/ANGRY.png",
    ANXIOUS: "/emoji/ANXIOUS.png",
    STRESSED: "/emoji/TIRED.png",
    NEUTRAL: "/emoji/NEUTRAL.png",
  };

  const symptomMap = {
    ANXIETY: "/symptoms/ANXIETY.png",
    STRESS: "/symptoms/STRESS.png",
    DEPRESSION: "/symptoms/DEPRESSION.webp",
    FATIGUE: "/symptoms/FATIGUE.png",
    INSOMNIA: "/symptoms/NSOMNIA.png",
    IRRITABILITY: "/symptoms/IRRITABILITY.jpg",
    MOOD_SWINGS: "/symptoms/MOOD_SWINGS.png",
    LACK_OF_MOTIVATION: "/symptoms/LACK_OF_MOTIVATION.avif",
    DIFFICULTY_CONCENTRATING: "/symptoms/DIFFICULTY_CONCENTRATING.jpg",
    SOCIAL_WITHDRAWAL: "/symptoms/SOCIAL_WITHDRAWAL.png",
    RESTLESSNESS: "/symptoms/RESTLESSNESS.jpg",
  };

  return (
    <>
      <div className=" flex  flex-col items-center justify-center">
        <div className=" max-w-[930px] w-full   px-4 py-8">
          <header className="mb-12  flex flex-col justify-center items-center text-center">
            <div className="space-y-3 ">
               
              <span className="font-medium text-foreground"></span>
              <div className="flex items-center gap-4 md:gap-6">
                <Image
                  src={user?.imageUrl!}
                  alt="User"
                  width={1024}
                  height={1024}
                  unoptimized
                  className="rounded-full w-12 h-12 object-cover"
                />
                <p className="text-sm md:font-bold md:text-xl">
                  {user?.firstName} {user?.lastName}
                </p>
              </div>
            </div>
            <h1 className="text-4xl font-bold mt-6  text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Your Health Summary
            </h1>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
              A comprehensive overview of your health profile ! Please Make sure
              to update from time to time !
            </p>
          </header>

          <div className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="col-span-full w-full  md:col-span-2 lg:col-span-3 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <CardTitle className="text-2xl">
                  Personal Information !{" "}
                </CardTitle>
              </CardHeader>

              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <InfoItem icon={<Activity className="h-6 w-6 text-blue-500" />} label="Age" value={age ? age.toString() : "N/A"} />

                <InfoItem
                  icon={<UserCircle className="h-6 w-6 text-purple-500" />}
                  label="Gender"
                  value={gender || "N/A"}
                />
                <InfoItem
                  icon={<Droplet className="h-6 w-6 text-red-500" />}
                  label="Blood Group"
                  value={bloodGroup || "N/A"}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="  mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <section className="col-span-full">
              <div className="flex flex-wrap my-4 justify-between items-center">
                <h2 className="text-2xl font-semibold text-red-500 mb-6 flex items-center">
                  <Heart className="mr-2 text-red-500" />
                  Symptoms
                </h2>
                <Link
                  href="/dashboard/account/settings"
                  className={buttonVariants({ size: "sm" })}
                >
                  Update Symptoms
                </Link>
              </div>
              {symptoms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {symptoms.map((symptom) => (
                    <Card
                      key={symptom.id}
                      className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      {/* Symptom Image */}
                      <div className="h-40 bg-gradient-to-r from-red-100 to-red-200 relative">
                        <Image
                          src={symptomMap[symptom.name] || "/placeholder.svg"}
                          alt={symptom.name.toLowerCase().replace("_", " ")}
                          layout="fill"
                          objectFit="cover"
                          className="mix-blend-overlay"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="capitalize text-xl text-gray-800 dark:text-gray-200">
                          {symptom.name.toLowerCase().replace("_", " ")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 capitalize">
                          Frequency:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {symptom.frequency.toLowerCase()}
                          </span>
                        </p>
                        <p className="text-gray-600">
                          Intensity:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {symptom.intensity}{" "}
                            <span className="text-[18px] font-bold">/10</span>
                          </span>
                        </p>
                      </CardContent>
                      <CardFooter className="text-sm text-gray-500">
                        Reported:{" "}
                        <span className="font-medium ml-1">
                          {symptom.loggedAt?.toLocaleString()}
                        </span>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8 bg-gray-100 rounded-lg">
                  No symptoms reported.
                </p>
              )}
            </section>

            {/* Mental Health Challenges */}
            <section className="col-span-full mt-12">
              <div className="flex flex-wrap my-4  justify-between items-center">
                <h2 className="text-2xl font-semibold text-purple-500 mb-6 flex items-center">
                  <Brain className="mr-2 text-purple-500" />
                  Mental Health Challenges
                </h2>
                <Link
                  href="/dashboard/account/settings"
                  className={buttonVariants({ size: "sm" })}
                >
                  Update Health Challenges
                </Link>
              </div>
              {medications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {medications.map((medication) => (
                    <Card
                      key={medication.id}
                      className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="h-20 bg-gradient-to-r from-purple-100 to-purple-200 relative"></div>
                      <CardHeader>
                        <CardTitle className="capitalize text-xl text-gray-800 dark:text-gray-200">
                          {medication.name.toLowerCase()}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 capitalize">
                          Frequency:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {medication.frequency.toLowerCase()}
                          </span>
                        </p>
                        <p className="text-gray-600">
                          Coping mechanisms:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {medication.purpose}
                          </span>
                        </p>
                        <p className="text-gray-600">
                          Self-care Activities:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {medication.adherence.toLowerCase()}
                          </span>
                        </p>
                      </CardContent>
                      {medication.startDate && (
                        <CardFooter className="text-sm text-gray-500">
                          Started:{" "}
                          <span className="font-medium ml-1">
                            {medication.startDate?.toLocaleString()}
                          </span>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8 bg-gray-100 rounded-lg">
                  No mental health challenges reported.
                </p>
              )}
            </section>

            {/* Mental Wellness */}
            <section className="col-span-full  mt-12">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-gray-200 mb-6 flex items-center">
                <Activity className="mr-2 text-green-500" />
                Mental Wellness
              </h2>
              {mentalWellness.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentalWellness.map((wellness) => (
                    <Card
                      key={wellness.id}
                      className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <CardContent className="pt-6 flex flex-col items-center">
                        {/* Emoji for Mood */}
                        <div className="mb-4">
                          <Image
                            src={emojiMap[wellness.mood.toUpperCase()]}
                            alt={wellness.mood}
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                        </div>
                        <p className="text-gray-600 capitalize mb-2">
                          Mood:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {wellness.mood.toLowerCase()}
                          </span>
                        </p>
                        <p className="text-gray-600 mb-2">
                          Sleep:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {wellness.sleep.toLowerCase()}
                          </span>
                        </p>
                        <p className="text-gray-600 mb-2">
                          Stress:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {wellness.stress.toLowerCase()}
                          </span>
                        </p>
                        <p className="text-gray-600 mb-2">
                          Happiness:{" "}
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {wellness.happiness}/10
                          </span>
                        </p>
                        {wellness.anxiety && (
                          <p className="text-gray-600">
                            Anxiety:{" "}
                            <span className="font-medium text-gray-800 dark:text-gray-200">
                              {wellness.anxiety}
                            </span>
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8 bg-gray-100 rounded-lg">
                  No mental wellness data reported.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-center space-x-3">
    {icon}
    <div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 capitalize">
        {value}
      </p>
    </div>
  </div>
);

export default HealthStatusPage;
