// activity-utils.ts
// lib/activity-utils.ts
import { db } from "@/lib/db";

export async function getUserActivity(activityId: string, userId: string) {
  return await db.activity.findFirst({
    where: {
      id: activityId,
      userId: userId,
    },
  });
}
