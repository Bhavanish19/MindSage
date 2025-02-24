// // // lib/activity.ts
// // import { db } from "@/lib";
// // import { currentUser } from "@clerk/nextjs/server";
// // import { Activity } from "@prisma/client";

// // export type UserActivities = Activity & {
// //   total_count: number;
// // };

// // // Fetch all of the activities for the selected user
// // export async function getUserActivities(userId: string): Promise<UserActivities[]> {
// //   const activities = await db.activity.findMany({
// //     where: {
// //       userId: userId,
// //     },
// //     include: {
// //       activityLogs: {
// //         select: {
// //           count: true, // Assuming `count` is the field you want to sum
// //         },
// //       },
// //     },
// //   });

// //   return activities.map(activity => {
// //     const totalCount = activity.activityLogs.reduce((sum, log) => sum + log.count, 0);
// //     return {
// //       ...activity,
// //       total_count: totalCount,
// //     };
// //   });
// // }



// // export async function verifyActivity(activityId: string) {
// //   const user = await currentUser();
// //   const count = await db.activity.count({
// //     where: {
// //       id: activityId,
// //       userId: user.id,
// //     },
// //   })

// //   return count > 0
// // }
 


// import { db } from "@/lib/db";

// export async function getUserActivity(activityId: string, userId: string) {
//   return await db.activity.findFirst({
//     where: {
//       id: activityId,
//       userId: userId,
//     },
//     select: {
//       id: true,
//       name: true,
//       description: true,
//       color_code: true,
//       createdAt: true,
//     },
//   });
// }

// export async function getUserActivities(userId: string) {
//   return await db.activity.findMany({
//     where: {
//       userId: userId,
//     },
//     select: {
//       id: true,
//       name: true,
//       description: true,
//       color_code: true,
//       createdAt: true,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// }


// latest 1 
// @ts-nocheck

import { db } from "@/lib/db";

export async function getUserActivity(activityId: string, userId: string) {
  return await db.activity.findFirst({
    where: {
      id: activityId,
      userId: userId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      color_code: true,
      createdAt: true,
    },
  });
}

export async function getUserActivities(userId: string) {
  return await db.activity.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      color_code: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}