import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import * as z from "zod";

// Define Zod schema for validation
const activityCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  color_code: z.string(),
});

export default async function createActivity(req: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      redirect("/signin");
    }

    // Parse and validate the request body
    const json = await req.json();
    const body = activityCreateSchema.parse(json);

    const activity = await db.activity.create({
      data: {
        name: body.name,
        description: body.description || "",
        color_code: body.color_code,
        userId: user.id,
      },
      select: {
        id: true,
      },
    });

    return new Response(JSON.stringify(activity), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    console.error("Failed to create activity:", error);
    return new Response("Failed to create activity", { status: 500 });
  }
}
