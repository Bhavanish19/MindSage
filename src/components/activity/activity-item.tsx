//@ts-nocheck
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Activity } from "@prisma/client";
import { formatDate, formatTimeAgo } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { ActivityOperations } from "@/components/activity/activity-operations";
import { QuickLogButton } from "@/components/activity/logs/quick-log-button";
import { CheckCircle2, Circle, CalendarDays } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActivityItemProps {
  activity: Pick<
    Activity,
    "id" | "name" | "description" | "color_code" | "createdAt"
  >;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const [isLoggedToday, setIsLoggedToday] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkIfLoggedToday = useCallback(async () => {
    const now = new Date();
    if (lastChecked && now.getDate() === lastChecked.getDate()) {
      return; // Don't check again if we've already checked today
    }

    const response = await fetch(`/api/activities/${activity.id}/logs/today`);
    if (response.ok) {
      const data = await response.json();
      setIsLoggedToday(data.isLoggedToday);
      setLastChecked(now);
    }
  }, [activity.id, lastChecked]);

  useEffect(() => {
    checkIfLoggedToday();
  }, [checkIfLoggedToday]);

  return (
    <Card
      className={`mt-4 overflow-hidden  transition-all duration-300 ${
        isLoggedToday ? "bg-primary/10 dark:bg-black200" : ""
      }`}
    >
      <CardContent className="p-6 dark:bg-black100  border ">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{ backgroundColor: activity.color_code }}
            >
              {isLoggedToday ? (
                <CheckCircle2 className="h-6 w-6 text-background" />
              ) : (
                <Circle className="h-6 w-6 text-background" />
              )}
            </div>

            <div>
              <Link
                href={`/dashboard/activities/${activity.id}`}
                className="text-xl font-bold hover:underline transition-colors duration-300 hover:text-primary"
              >
                {activity.name}
              </Link>
              <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>Created {formatTimeAgo(activity.createdAt)}</span>
              </div>
            </div>
          </div>
          {/* TODO  isLoggedToday is returning NULL  */}
          {/* <Badge variant={isLoggedToday ? "secondary" : "outline"} className="text-xs">
            {isLoggedToday ? "Logged Today" : "Not Logged"}
          </Badge> */}
        </div>
        {activity.description && (
          <p className="mt-4 text-sm text-muted-foreground">
            {activity.description}
          </p>
        )}
      </CardContent>
      <CardFooter className="dark:bg-black100/50 p-4 flex justify-between items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={`/dashboard/activities/${activity.id}`}
                className="text-xl font-bold hover:underline transition-colors duration-300 hover:text-primary"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground  hover:text-foreground"
                >
                  View Details
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>See full habit details and history</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex items-center gap-2">
          <QuickLogButton
            activityId={activity.id}
            isLoggedToday={isLoggedToday}
            onLogComplete={() => {
              setIsLoggedToday(true);
              setLastChecked(new Date());
            }}
            onCheckLoggedToday={checkIfLoggedToday}
          />
          <ActivityOperations
            activity={{
              id: activity.id,
            }}
          />
        </div>
      </CardFooter>
    </Card>
  );
}

ActivityItem.Skeleton = function ActivityItemSkeleton() {
  return (
    <Card className="mt-4">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="h-4 w-full mt-4" />
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <Skeleton className="h-9 w-24" />
        <div className="flex items-center gap-2 ml-auto">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-9" />
        </div>
      </CardFooter>
    </Card>
  );
};
