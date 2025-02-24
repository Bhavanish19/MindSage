// @ts-nocheck

import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { dateRangeParams } from "@/lib/utils";
import { getStatsDashboardData } from "@/lib/dashboard";
import { Heatmap } from "@/components/charts/heatmap";
import { StatsCards } from "@/components/activity/stats/stats-cards";
import { DataTable } from "@/components/data-table";
import { logColumns } from "@/components/activity/logs/logs-columns";
import { Shell } from "@/components/layout/shell";
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header";
import { DateRangePicker } from "@/components/date-range-picker";
import { ActivityOperations } from "@/components/activity/activity-operations";
// import { getUserActivity } from "@/app/api/activities/route";
import { getUserActivity } from "@/lib/activity"; // Updated import

interface ActivityPageProps {
  params: { activityId: string };
  searchParams: { from: string; to: string };
}

export const metadata: Metadata = {
  title: "Activity Stats",
  description: "Activity statistics and logs.",
};

export default async function ActivityPage({
  params,
  searchParams,
}: ActivityPageProps) {
  const user = await currentUser();

  if (!user) {
    redirect("/signin");
  }

  const activity = await getUserActivity(params.activityId, user.id);

  if (!activity) {
    notFound();
  }

  const dateRange = dateRangeParams(searchParams);
  const dashboardData = await getStatsDashboardData(activity.id, dateRange);

  return (
    <>
      <Shell>
        <DashboardHeader
          heading={`${activity.name} Stats`}
          text={activity.description ?? ""}
        >
          <div className="flex flex-col items-stretch gap-2 md:items-end">
            <DateRangePicker />
            <ActivityOperations activity={{ id: activity.id }}>
              <div className="w-full button-outline">Actions</div>
            </ActivityOperations>
          </div>
        </DashboardHeader>

        <Heatmap data={dashboardData.logs} params={params} />
        <StatsCards data={dashboardData} searchParams={searchParams} />
        <DataTable columns={logColumns} data={dashboardData.logs}>
          Log History
        </DataTable>
      </Shell>
    </>
  );
}
