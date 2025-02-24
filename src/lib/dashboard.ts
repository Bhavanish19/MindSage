// @ts-nocheck


import { db } from "@/lib";
import { Activity, ActivityLog } from "@prisma/client";
 
import { currentUser } from "@clerk/nextjs/server";
import { ActivityByDate, ActivityEntry, DateRange } from "../../types";

type DateRangeType = {
  from: Date;
  to: Date;
};

export type UserActivities = Activity & {
  total_count: number;
};

export async function getDashboardData(
  userId: string,
  dateRange: DateRangeType
) {
  const [
    logs,
    streak,
    totalLogs,
    mostLoggedActivity,
    activityCountByDate,
    topActivities,
    userActivities,
  ] = await Promise.all([
    getLogs(userId, dateRange, "user"),
    getStreak(userId, "user"),
    getTotalLogs(userId, dateRange, "user"),
    getMostLoggedActivity(userId, dateRange),
    getActivityCountByDate(userId, dateRange),
    getTopActivities(userId, dateRange),
    getUserActivities(userId),
  ]);

  return {
    logs,
    streak,
    totalLogs,
    mostLoggedActivity,
    activityCountByDate,
    topActivities,
    userActivities,
  };
}

export async function getStatsDashboardData(
  activityId: string,
  dateRange: DateRangeType
) {
  const [logs, streak, totalLogs, dailyAverage] = await Promise.all([
    getLogs(activityId, dateRange, "activity"),
    getStreak(activityId, "activity"),
    getTotalLogs(activityId, dateRange, "activity"),
    getDailyAverage(activityId, dateRange),
  ]);

  return {
    logs,
    streak,
    totalLogs,
    dailyAverage,
  };
}

export async function getLogs(
  id: string,
  dateRange: DateRange,
  type: "user" | "activity"
) {
  const typeCondition =
    type === "activity" ? { activityId: id } : { activity: { userId: id } };

  return await db.activityLog.findMany({
    select: {
      id: true,
      date: true,
      count: true,
      activity: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      date: {
        gte: dateRange.from,
        lte: dateRange.to,
      },
      ...typeCondition,
    },
    orderBy: {
      date: "desc",
    },
  });
}

export async function getStreak(
  id: string,
  type: "user" | "activity"
): Promise<{
  currentStreak: number;
  longestStreak: number;
}> {
  const typeCondition =
    type === "activity" ? { activityId: id } : { activity: { userId: id } };

  const logs = await db.activityLog.findMany({
    where: typeCondition,
    distinct: ["date"],
    orderBy: { date: "asc" },
  });

  if (logs.length === 0) {
    return { longestStreak: 0, currentStreak: 0 };
  }

  let currentStreak = 1;
  let longestStreak = 1;

  const oneDay = 24 * 60 * 60 * 1000;

  for (let i = 0; i < logs.length - 1; i++) {
    const latestDate = new Date(logs[i].date).getTime();
    const nextDate = new Date(logs[i + 1].date).getTime();

    const timeDiff = latestDate - nextDate;

    if (Math.abs(timeDiff) <= oneDay) {
      currentStreak++;
    } else {
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
      currentStreak = 1;
    }
  }

  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }

  // Reset streak if user is inactive
  const lastLogDate = new Date(logs[logs.length - 1].date).getTime();
  const currentDate = new Date().getTime();
  const timeDiff = currentDate - lastLogDate;

  if (Math.abs(timeDiff) > oneDay * 2) {
    currentStreak = 0;
  }

  return { longestStreak, currentStreak };
}

export async function getTotalLogs(
  id: string,
  dateRange: DateRange,
  type: "user" | "activity"
) {
  const typeCondition =
    type === "activity" ? { activityId: id } : { activity: { userId: id } };

  const result = await db.activityLog.aggregate({
    _sum: {
      count: true,
    },
    where: {
      date: {
        gte: dateRange.from,
        lte: dateRange.to,
      },
      ...typeCondition,
    },
  });

  return result._sum.count ?? 0;
}

export async function getMostLoggedActivity(
  userId: string,
  dateRange: DateRange
) {
  const logs = await db.activityLog.groupBy({
    by: ["activityId"],
    _sum: {
      count: true,
    },
    orderBy: {
      _sum: {
        count: "desc",
      },
    },
    where: {
      activity: {
        userId: userId,
      },
      date: {
        gte: dateRange.from,
        lte: dateRange.to,
      },
    },
    take: 1,
  });

  if (logs.length === 0) {
    return "N/A";
  }

  const mostLoggedActivityId = logs[0].activityId;
  const mostLoggedActivity = await db.activity.findUnique({
    select: {
      name: true,
    },
    where: {
      id: mostLoggedActivityId,
    },
  });

  return mostLoggedActivity?.name ?? "N/A";
}

export async function getTopActivities(
  userId: string,
  dateRange: DateRange
): Promise<ActivityEntry[]> {
  const logs = await db.activityLog.groupBy({
    by: ["activityId"],
    _sum: {
      count: true,
    },
    orderBy: {
      _sum: {
        count: "desc",
      },
    },
    where: {
      activity: {
        userId: userId,
      },
      date: {
        gte: dateRange.from,
        lte: dateRange.to,
      },
    },
    take: 10,
  });

  const topActivities = await Promise.all(
    logs.map(async (log) => {
      const activity = await db.activity.findUnique({
        where: {
          id: log.activityId,
        },
      });
      return {
        name: activity?.name || "N/A",
        count: log._sum.count ?? 0,
        color: activity?.color_code || "#FFFFFF",
      };
    })
  );

  return topActivities;
}

export async function getActivityCountByDate(
  userId: string,
  dateRange: DateRange
): Promise<ActivityByDate[]> {
  const logs = await db.activityLog.groupBy({
    by: ["date"],
    _sum: {
      count: true,
    },
    orderBy: {
      date: "asc",
    },
    where: {
      activity: {
        userId: userId,
      },
      date: {
        gte: dateRange.from,
        lte: dateRange.to,
      },
    },
  });

  const result: ActivityByDate[] = logs.map((log) => ({
    date: log.date.toISOString(),
    count: log._sum.count ?? 0,
  }));

  return result;
}

export async function getDailyAverage(
  activityId: string,
  dateRange: DateRange
): Promise<number> {
  const logs = await db.activityLog.findMany({
    where: {
      activityId: activityId,
      date: {
        gte: dateRange.from,
        lte: dateRange.to,
      },
    },
    orderBy: {
      date: "asc",
    },
  });

  const totalCount = logs.reduce((sum, log) => sum + log.count, 0);

  if (totalCount === 0) {
    return 0;
  }

  const oldestDate = new Date(logs[0].date);
  const today = new Date(dateRange.to);
  const timePeriodInDays = Math.ceil(
    (today.getTime() - oldestDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const dailyAverage = totalCount / timePeriodInDays;

  return parseFloat(dailyAverage.toFixed(2));
}

export async function getUserActivities(userId: string): Promise<UserActivities[]> {
  const activities = await db.activity.findMany({
    where: {
      userId: userId,
    },
    include: {
      activityLogs: {
        select: {
          count: true,
        },
      },
    },
  });

  return activities.map(activity => {
    const totalCount = activity.activityLogs.reduce((sum, log) => sum + log.count, 0);
    return {
      ...activity,
      total_count: totalCount,
    };
  });
}

export async function verifyActivity(activityId: string) {
  const user = await currentUser();
  const count = await db.activity.count({
    where: {
      id: activityId,
      userId: user.id,
    },
  });

  return count > 0;
}