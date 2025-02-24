 



import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUserActivities } from "@/lib/activity";
  


import createActivity from "@/actions/create-activity";
export async function POST(req: NextRequest) {
  return await createActivity(req);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const activities = await getUserActivities(userId);
    return NextResponse.json(activities);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch activities" }, { status: 500 });
  }
}