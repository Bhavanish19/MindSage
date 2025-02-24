import { Activity } from "@prisma/client";

import { EmptyPlaceholder } from "@/components/empty-placeholder";

import { Icons } from "@/components/icons";

import { ActivityAddButton } from "./activity-add-button";
import { ActivityItem } from "./activity-item";
import Image from "next/image";

// components/activity/activity-list.tsx
interface ActivityListProps {
  activities: {
    id: string;
    name: string;
    description: string | null;
    color_code: string;
    createdAt: Date;
  }[];
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <>
      {activities?.length ? (
        <>
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </>
      ) : (
        <EmptyPlaceholder>
          <div className="flex h-20 w-20 items-center justify-center rounded-full  bg-slate-100 dark:bg-black100">
            <Image
              src="/images/brain-hi.png"
              height={100}
              width={100}
              alt="MindSage logo"
              className="mb-1x h-10 w-fit"
            />
          </div>
          <EmptyPlaceholder.Title>No habits created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            Add a habit to start tracking your progress towards better mental
            wellness.
          </EmptyPlaceholder.Description>
          <ActivityAddButton />
        </EmptyPlaceholder>
      )}
    </>
  );
}
