import { Prisma } from "@prisma/client";

 
export async function getUserActivities(userId: string): Promise<UserActivities[]> {
  const results = await Prisma.activity.aggregate({
    _count: {
      activityLogs: true, // This counts the number of logs related to the activity
    },
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      color_code: true,
      createdAt: true,
      _count: {
        select: {
          activityLogs: true,
        },
      },
    },
    orderBy: {
      _count: {
        activityLogs: "desc", // Order by the total count of activity logs
      },
    },
  });

  return results.map((result) => ({
    ...result,
    total_count: result._count.activityLogs, // Get the total count from the aggregation
  }));
}
