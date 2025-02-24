import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoSection } from "@/components/VideoSection";
import SmoothScrollButton from "@/components/yoga-components/SmoothScrollButton";

const benefits = [
  "Yoga benefits in weight loss",
  "Yoga is one of the best solutions for stress relief",
  "Yoga helps for inner peace",
  "Yoga Improves immunity",
  "Practice of Yoga Offers awareness",
  "Yoga improves relationships",
  "Yoga Increases energy",
  "Yoga Gives you Better flexibility and posture",
  "Yoga helps in improving intuition",
];

const asanas = [
  {
    name: "Ardha Chakrasana",
    image: "/images2/yoga1.webp",
    description:
      "Ardha Chakrasana, or the Standing Backward Bend Pose, stretches the front upper torso and tones the arms and shoulder muscles.",
    link: "https://www.artofliving.org/in-en/yoga/yoga-poses/standing-backward-bend",
  },
  {
    name: "Virabhadrasana",
    image: "/images2/yoga2.webp",
    description:
      "Virabhadrasana or Warrior Pose increases stamina, strengthens arms, and brings courage and grace. It is an excellent yoga pose for those in sedentary jobs.",
    link: "https://www.artofliving.org/in-en/yoga/yoga-poses/warrior-pose-virbhadrasana",
  },
  {
    name: "Paschim Namaskarasana",
    image: "/images2/yoga4.webp",
    description:
      "This yoga pose opens the abdomen and stretches the upper back and shoulder joints.",
    link: "https://www.artofliving.org/in-en/yoga/yoga-poses/reverse-prayer-pose",
  },
  {
    name: "Ardha Matsyendrasana",
    image: "/images2/yoga5.webp",
    description:
      "Ardha Matsyendrasana, or the Half Spinal Twist Pose, makes the spine more elastic and increases the oxygen supply to the lungs.",
    link: "https://www.artofliving.org/in-en/yoga/yoga-poses/sitting-half-spinal-twist-ardha-matsyendrasana",
  },
  {
    name: "Prasarita Padahastasana",
    image: "/images2/yoga3.webp",
    description:
      "This yoga pose lengthens the spine, strengthens the legs and feet, and strengthens the abdomen.",
    link: "https://www.artofliving.org/in-en/yoga/yoga-poses/standing-forward-bend",
  },
];

const videos = [
  { id: "s2NQhpFGIOg", title: "Yoga for Beginners" },
  { id: "g_tea8ZNk5A", title: "Morning Yoga Routine" },
  { id: "c8hjhRqIwHE", title: "Yoga for Stress Relief" },
  { id: "brjAjq4zEIE", title: "Yoga for Flexibility" },
  { id: "0XBcrjkkwQo", title: "Yoga for Back Pain" },
  { id: "7Vqv5SmSKHY", title: "Yoga for Better Sleep" },
];

export default function YogaTherapy() {
  return (
    <div className="min-h-screen ">
      <header className="relative h-[70vh] bg-yoga rounded-b-[22px] md:rounded-b-[32px]  overflow-hidden">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Yoga Enhances Your Life
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A mind and body practice combining various styles of physical
              postures, breathing techniques, and meditation or relaxation. Yoga
              is an ancient practice that may have originated in India.
            </p>
            <SmoothScrollButton targetId="yoga-videos">
              Start Your Journey
            </SmoothScrollButton>
          </div>
        </div>
      </header>

      <main className="  mx-auto px-4 py-16 space-y-24">
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Benefits of Yoga
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/files/med2.png"
                alt="Yoga benefits"
                layout="fill"
                objectFit="contain "
              />
            </div>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Yoga Asanas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asanas.map((asana, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={asana.image}
                    alt={asana.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{asana.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{asana.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={asana.link}
                    >
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.artofliving.org/in-en/yoga/yoga-poses/sitting-standing-recumbent-yoga-poses"
              >
                Explore More Asanas
              </Link>
            </Button>
          </div>
        </section>

        <section id="yoga-videos" className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Yoga Videos
          </h2>
          <Tabs defaultValue="video1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8">
              {videos.map((video, index) => (
                <TabsTrigger
                  key={index}
                  value={`video${index + 1}`}
                  className="px-2 py-1 text-sm"
                >
                  {video.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {videos.map((video, index) => (
              <TabsContent key={index} value={`video${index + 1}`}>
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">
                      {video.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
    </div>
  );
}
