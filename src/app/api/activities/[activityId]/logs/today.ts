import { NextApiRequest, NextApiResponse } from "next";
 
 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { activityId } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Set the time to start of the current day
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Query for a log that matches today's date for the given activity ID
    const log = await db.log.findFirst({
      where: {
        activityId: activityId as string,
        createdAt: {
          gte: today,
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Check if a log exists for today
    const isLoggedToday = Boolean(log);
    res.status(200).json({ isLoggedToday });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch log status" });
  }
}
