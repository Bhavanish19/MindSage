import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Ensure this is the correct path to your Prisma client

export async function PATCH(req: Request, { params }: { params: { activityId: string } }) {
  const { activityId } = params;
  const data = await req.json();
  
  const updatedActivity = await db.activity.update({
    where: { id: activityId },
    data: {
      name: data.name,
      description: data.description,
      color_code: data.color_code,  // Ensure correct field name
    },
  });

  return NextResponse.json(updatedActivity);
}


export async function DELETE(req: Request, { params }: { params: { activityId: string } }) {
  const { activityId } = params;

  try {
    await db.activity.delete({
      where: { id: activityId },
    });

    return NextResponse.json({ message: "Activity deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete activity" }, { status: 500 });
  }
}