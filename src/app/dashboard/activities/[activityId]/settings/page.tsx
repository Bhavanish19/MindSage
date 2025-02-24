// @ts-nocheck

import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { ActivityEditForm } from "@/components/activity/activity-edit-form";
import { Shell } from "@/components/layout/shell";
import { DashboardHeader } from "@/components/pages/dashboard/dashboard-header";
import { currentUser } from "@clerk/nextjs/server";
// import { getUserActivity } from "@/app/api/activities/route";
import { getUserActivity } from "@/lib/activity"; // Updated import

export const metadata: Metadata = {
  title: "Activity Settings",
};

interface ActivityEditProps {
  params: { activityId: string };
}

export default async function ActivityEdit({ params }: ActivityEditProps) {
  const user = await currentUser();

  if (!user) {
    redirect("/signin");
  }

  const activity = await getUserActivity(params.activityId, user.id);

  if (!activity) {
    notFound();
  }

  return (
    <Shell>
      <DashboardHeader
        heading="Habit Settings"
        text="Customize your habit details for better tracking and progress."
      />
      <div className="grid grid-cols-1 gap-10">
        <ActivityEditForm
          activity={{
            id: activity.id,
            name: activity.name,
            description: activity.description,
            color_code: activity.color_code,
          }}
        />
      </div>
    </Shell>
  );
}
