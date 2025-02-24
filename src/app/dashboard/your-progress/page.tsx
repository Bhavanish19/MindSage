// @ts-nocheck

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
      <div>
        <Shell>
          <DashboardHeader
            heading="Habit Dashboard"
            text="Monitor your progress."
          >
            <DateRangePicker />
          </DashboardHeader>


          
          <div className={layout}>
            <ScrollArea className={scrollClass}>
              <div className=" p-1 md:p-2 ">
                <ActivityList activities={dashboardData.userActivities} />
              </div>
            </ScrollArea>
            {activityData && (
              <>
                <DashboardCards
                  data={dashboardData}
                  searchParams={searchParams}
                />
                <LineChartComponent data={dashboardData.activityCountByDate} />
                <PieChartComponent data={dashboardData.topActivities} />
              </>
            )}
          </div>

          <DataTable columns={logColumns} data={dashboardData.logs}>
            Log History
          </DataTable>
        </Shell>
      </div>
    </>
  );
};

export default DashboardPage;
