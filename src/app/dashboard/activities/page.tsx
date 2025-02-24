import { Metadata } from "next";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { ActivityAddButton } from "@/components/activity/activity-add-button";
import { ActivityList } from "@/components/activity/activity-list";
import { getUserActivities } from "@/lib/activity";
import { Shell } from "@/components/layout/shell";
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";

import { Icons } from "@/components/icons";

const dummyActivities = [
  {
    id: "dummy1",
    name: "Start Learning a New Language",
    description:
      "Challenge yourself to learn a few words every day. Small steps lead to big progress, and the world opens up!",
    color_code: "#00C9A7", // Fresh, energizing green
    createdAt: new Date(Date.now() - 15 * 60000).toISOString(), // 15 minutes ago
  },
  {
    id: "dummy2",
    name: "10-Minute Meditation",
    description:
      "Clear your mind and refresh your spirit. Just 10 minutes can make a world of difference in your day.",
    color_code: "#FFB800", // Calm, soothing yellow
    createdAt: new Date(Date.now() - 30 * 60000).toISOString(), // 30 minutes ago
  },
  {
    id: "dummy3",
    name: "Stretching Routine",
    description:
      "Start your day with a short stretching routine. A few minutes can improve your focus and flexibility!",
    color_code: "#FF3D71", // Energizing pink
    createdAt: new Date(Date.now() - 60 * 60000).toISOString(), // 1 hour ago
  },
  {
    id: "dummy4",
    name: "Plan Your Day",
    description:
      "Take a moment each morning to plan your day. Setting clear intentions helps you stay on track and achieve your goals.",
    color_code: "#1E86FF", // Peaceful blue
    createdAt: new Date(Date.now() - 120 * 60000).toISOString(), // 2 hours ago
  },
  {
    id: "dummy5",
    name: "Write a Daily Gratitude List",
    description:
      "End each day by writing down what you're thankful for. This simple habit can shift your perspective and boost your mood.",
    color_code: "#FF6F00", // Warm orange for positivity
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString(), // 2 hours ago
  },
  {
    id: "dummy6",
    name: "Take 10 Deep Breaths",
    description:
      "Pause, breathe deeply, and reset. Taking a moment to breathe can reduce stress and clear your mind.",
    color_code: "#FF8C00", // Warm and calming orange
    createdAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(), // 3 hours ago
  },
  {
    id: "dummy7",
    name: "Read 10 Pages of a Book",
    description:
      "Set a goal to read a little every day. 10 pages a day can add up to big personal growth over time!",
    color_code: "#5A5A5A", // Classic, motivating gray
    createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString(), // 4 hours ago
  },
  {
    id: "dummy8",
    name: "Journal Your Thoughts",
    description:
      "Write down your thoughts for 5 minutes each day. Journaling helps you reflect and understand yourself better.",
    color_code: "#28A745", // Fresh green for growth
    createdAt: new Date(Date.now() - 5 * 3600 * 1000).toISOString(), // 5 hours ago
  },
  {
    id: "dummy9",
    name: "Unplug for 30 Minutes",
    description:
      "Disconnect from screens for 30 minutes. Spend time outside, read a book, or simply relax. You deserve it.",
    color_code: "#FF5733", // Bright, energizing red
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString(), // 6 hours ago
  },
  {
    id: "dummy10",
    name: "Organize Your Workspace",
    description:
      "A tidy workspace can clear your mind. Take 10 minutes to organize your desk, and feel the difference it makes!",
    color_code: "#5C6BC0", // Calming purple
    createdAt: new Date(Date.now() - 7 * 3600 * 1000).toISOString(), // 7 hours ago
  },
  {
    id: "dummy11",
    name: "Drink More Water",
    description:
      "Stay hydrated! Drinking water throughout the day helps your mind stay sharp and your body stay energized.",
    color_code: "#00B8D4", // Refreshing aqua blue
    createdAt: new Date(Date.now() - 8 * 3600 * 1000).toISOString(), // 8 hours ago
  },
  {
    id: "dummy12",
    name: "Set a Weekly Goal",
    description:
      "Each week, set a personal goal. Whether it's fitness, learning, or creativity, having a goal keeps you motivated!",
    color_code: "#8BC34A", // Energizing green
    createdAt: new Date(Date.now() - 9 * 3600 * 1000).toISOString(), // 9 hours ago
  },
];

const ActivityCard = ({ name, description, color_code, createdAt }: any) => (
  <Card
    className={cn(
      "relative  w-full  rounded-2xl  p-1 transition-all duration-200 ease-in-out hover:scale-[103%]",
      "bg-white dark:bg-black100 dark:backdrop-blur-md mt-4 overflow-hidden"
    )}
  >
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className="h-12 w-12 rounded-full hidden shadow-lg md:flex items-center justify-center transition-transform duration-300 hover:scale-110"
            style={{ backgroundColor: color_code }}
          >
            {/* Placeholder for check icon */}
            <Circle className="h-6 w-6 text-background" />
          </div>

          <div>
            <figcaption className="text-lg font-medium dark:text-white">
              {name} ·{" "}
              <span className="text-xs text-gray-500">
                {new Date(createdAt).toLocaleString()}
              </span>
            </figcaption>
            <p className="text-sm dark:text-white/60">{description}</p>
          </div>
        </div>
        {/* Placeholder for badge */}
        {/* <Badge variant="outline" className="text-xs">
          Not Logged
        </Badge> */}
      </div>
    </CardContent>
    <CardFooter className="  p-4 hidden md:flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Button>
          <Icons.add className="mr-2 h-4 w-4" />
          <span className="ml-2 hidden sm:inline">Log</span>
        </Button>
      </div>
    </CardFooter>
  </Card>
);

function ActivityListDisplay({ activities }: { activities: any[] }) {
  return (
    <div className="relative flex flex-col p-2  overflow-hidden rounded-lg h-[35rem]">
      <div> recommend habits ! </div>
      <AnimatedList className="h-full overflow-y-auto scrollbar-hidden">
        {" "}
        {/* Hide the scrollbar */}
        {activities.map((item: any, idx: number) => (
          <ActivityCard {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Building Healthy Habits | MindSage",
  description: "Achieve your wellness goals through incremental activities.",
};

export default async function ActivitiesPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/signin");
  }

  const activities = await getUserActivities(user.id);

  return (
    <Shell>
      <DashboardHeader
        heading="Step Into Your Best Self"
        text="Transform your life by completing small, meaningful goals each day !"
      >
        <ActivityAddButton />
      </DashboardHeader>

      <div className="flex flex-col    gap-3 md:gap-5 md:flex-row ">
        <div className="flex-col flex flex-grow max-w-[900px] bg-slate-100 dark:bg-black200 rounded-16px md:rounded-[20px]  px-4 pb-3">
          {activities && activities.length > 0 ? (
            <ActivityList activities={activities} />
          ) : (
            <ActivityListDisplay activities={dummyActivities} />
          )}
        </div>

        <div className="flex  justify-center px-4 md:max-w-[16rem] md:p-2">
          <div className="flex flex-col   ">
            <Image
              src="/files/puzzle.png"
              alt="Mental health support illustration"
              width={500}
              height={700}
              quality={100}
              priority
              className="   h-[320px]  object-contain  "
            />
            <h3 className="font-semibold text-orange-400 text-lg mb-2">
              Why Small Goals Matter !
            </h3>
            <p className=" font-semibold w-full  text-base">
              Building healthy habits starts with small, achievable goals. By
              focusing on one activity at a time, you can make steady progress
              and develop a sustainable routine. <br /> MindSage helps you track
              your activities and celebrate your successes, motivating you to
              keep going!
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
