// @ts-nocheck
import { Footer } from "@/components/home-layout/footer";
import LeftPanel from "@/home-components/left-panel";
import RightPanel from "@/home-components/right-panel";
import WidgetComponent from "@/components/WidgetComponent";
import { Recommendations } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import MagicCard from "@/components/ui/magic-card";
import { db } from "@/lib";
import { getDashboardData } from "@/lib/dashboard";
import { dateRangeParams } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { Music } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityList } from "@/components/activity/activity-list";
import { logColumns } from "@/components/activity/logs/logs-columns";
import { LineChartComponent } from "@/components/charts/linechart";
import { PieChartComponent } from "@/components/charts/piechart";
import { DataTable } from "@/components/data-table";
import { DateRangePicker } from "@/components/date-range-picker";
import { Shell } from "@/components/layout/shell";
import { DashboardCards } from "@/components/pages/dashboard/dashboard-cards";
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header";
import {
  BrainIcon,
  HeartPulseIcon,
  NotepadTextIcon,
  StethoscopeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";

import Safari from "@/components/magicui/safari";
import { MovingCards } from "@/components/Cards";
import Hero from "@/blog-components/Hero";
import Badges from "@/blog-components/Badges";
import Bio from "@/blog-components/Bio";
import Testimonials from "@/blog-components/Testimonials";
import Work from "@/blog-components/Work";
import Contact from "@/blog-components/Contact";
import { VideoSection } from "@/components/VideoSection";
import { RainbowButton } from "@/components/ui/rainbow-button";
import AnimatedModalDemo from "@/components/ui/AnimatedModalDemo";

interface DashboardProps {
  searchParams: { from: string; to: string };
}

const DashboardPage = async ({ searchParams }: DashboardProps) => {
  const user = await currentUser();

  const dbUser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      symptoms: true,
      medications: true,
      mentalwellness: true,
    },
  });

  const symptoms = await db.symptom.findMany({
    where: {
      userId: user?.id,
    },
  });

  const medications = await db.medication.findMany({
    where: {
      userId: user?.id,
    },
  });

  const dateRange = dateRangeParams(searchParams);
  const dashboardData = await getDashboardData(user.id, dateRange);

  const activityData =
    dashboardData.activityCountByDate.length > 0 &&
    dashboardData.topActivities.length > 0;

  const layout = activityData
    ? "grid grid-cols-1 gap-4 md:grid-cols-2"
    : "grid grid-cols-1";
  const scrollClass = activityData
    ? "h-[17rem] rounded-lg border"
    : "h-[25.1rem] rounded-lg border";

  return (
    <>
      <main className="relative flex flex-col items-center flex-1 w-full h-full">
        {/* Pattern */}
        <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-verySmall" />
        {/* Overlay */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-white
         via-white/90 to-white dark:from-black100 dark:via-black100/90 dark:to-black100"
        />
        <div className="   relative z-20 flex flex-col w-full h-full px-1 md:px-2 gap:6  xl:flex-row">
          {/* Left Panel */}
          <LeftPanel />
          {/* Right Panel */}
          <RightPanel />
          <WidgetComponent />
          {/* Footer for Mobile */}
          <div className="flex pb-6 xl:hidden">
            <Footer />
          </div>
        </div>
      </main>

      <Testimonials />

      <div className="grid grid-cols-1 mt-4 md:mt-6 md:grid-cols-2 xl:grid-cols-12 w-full gap-6 lg:p-8">
        <div className="flex flex-col h-full md:col-span-1 xl:col-span-8 gap-8 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full h-full">
            <MagicCard
              color="rgba(99,102,241,.08)"
              className="border-2 border-indigo-300 w-full h-full"
            >
              <Link
                href="/dashboard/activities"
                className="flex flex-col h-full p-4 bg-white dark:bg-black200 group"
              >
                <div className="mb-4 space-y-1">
                  <Image
                    src="/streak.png"
                    width={924}
                    alt="Image-tag"
                    height={924}
                    className="  rounded-2xl object-cover"
                  />
                  <h5 className="font-semibold md:text-[24px] text-[16px] text-indigo-500">
                    Streak System
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-slate-500">
                    Gain insights to guide your journey!
                  </p>
                </div>
                <Flame className="self-end w-8 h-8 text-indigo-500 transition-transform group-hover:scale-105" />
              </Link>
            </MagicCard>

            <MagicCard
              color="rgba(239,68,68,.08)"
              className="border-2 border-red-300 w-full h-full"
            >
              <Link
                href="/dashboard/health-status"
                className="flex flex-col h-full p-4 dark:bg-black200 bg-white group"
              >
                <Image
                  src="/condition2.webp"
                  width={924}
                  alt="Image-tag"
                  height={924}
                  className="  rounded-2xl  max-h-[150px] object-cover"
                />
                <div className="mb-4 space-y-1">
                  <h5 className="font-semibold md:text-[24px] text-[16px] text-red-00">
                    Building Habits
                  </h5>
                  <p className="text-sm text-neutral-600 dark:text-slate-500">
                    Be Consistant and Challenge yourself
                  </p>
                </div>
                <HeartPulseIcon className="self-end w-8 h-8 text-red-500 transition-transform group-hover:scale-105" />
              </Link>
            </MagicCard>

            <MagicCard
              color="rgba(99,102,241,.08)"
              className="border-2 border-yellow-200 w-full h-full"
            >
              <Link
                href="/dashboard/"
                className="flex flex-col h-full p-4 dark:bg-black200 bg-white group"
              >
                <div className="mb-4 flex flex-col  justify-end  space-y-4">
                  <div>
                    <h5 className="font-semibold justify-center items-center mb-2 md:text-[24px] text-[16px] text-yellow-600">
                      MindSage Blogs
                    </h5>

                    <p className="text-sm  text-neutral-600 dark:text-slate-500">
                      Discover practical wellness blogs written by Mental Health
                      Professionals
                    </p>
                  </div>
                  <AnimatedModalDemo />
                </div>
              </Link>
            </MagicCard>

            <MagicCard
              color="rgba(217,70,239,.1)"
              className="border-2 border-fuchsia-300 w-full h-full"
            >
              <Link
                href="/dashboard/MindSage-advice"
                className="flex flex-col h-full p-4 dark:bg-black200 bg-white group"
              >
                <div className="mb-4 space-y-1">
                  <BrainIcon className="self-end w-8 h-8 text-fuchsia-500 transition-transform group-hover:scale-105" />

                  <h5 className="font-semibold md:text-[24px] text-[16px] text-fuchsia-600">
                    Self-Discovery
                  </h5>

                  <p className="text-sm text-neutral-600 dark:text-slate-500">
                    Explore yourself Know Your Self ! more features from
                    MindSage ! Boost your mental clarity and resilience.
                  </p>
                </div>
              </Link>
            </MagicCard>
          </div>
        </div>

        <div className="hidden  md:flex flex-col md:col-span-1 xl:col-span-4 gap-6 w-full">
          <Image
            src="/condition.jpg"
            width={1024}
            alt="Image-tag"
            height={1024}
            className="  rounded-3xl object-cover"
          />

          <div className="flex flex-col items-start w-full border border-border/50 rounded-xl py-6 md:py-8 px-4 md:px-6">
            <Link href="/wellness-library">
              <RainbowButton>
                <h2 className=" font-bold text-[18px] text-orange-500">
                  Explore the WellNess Library
                </h2>
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
      <VideoSection />
      <Hero />
      <Badges />
    </>
  );
};

export default DashboardPage;
