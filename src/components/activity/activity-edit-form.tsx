"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Activity } from "@prisma/client";
import { HexColorPicker } from "react-colorful";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { activityPatchSchema } from "@/lib/validators/activity";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import { LampDemo } from "../lamp";

interface ActivityEditFormProps extends React.HTMLAttributes<HTMLFormElement> {
  activity: Pick<Activity, "id" | "name" | "description" | "color_code">;
}

type FormData = z.infer<typeof activityPatchSchema>;

export function ActivityEditForm({
  activity,
  className,
  ...props
}: ActivityEditFormProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(activityPatchSchema),
    defaultValues: {
      name: activity?.name || "",
      description: activity?.description || "",
      color_code: "",
    },
  });
  const [color, setColor] = React.useState(activity.color_code || "#ffffff");

  async function onSubmit(data: FormData) {
    const response = await fetch(`/api/activities/${activity.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        color_code: color,
      }),
    });

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your activity was not updated. Please try again.",
        variant: "destructive",
      });
    }

    toast({
      description: "Your activity has been updated.",
    });

    router.back();
    router.refresh();
  }

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Card className=" flex p-4 rounded-2xl ">
        <div className="  dark:bg-black200 bg-slate-100 rounded-2xl max-w-[45%] w-full">
          <CardHeader className="w-full ">
            <CardTitle>{activity.name}</CardTitle>
            {activity.description && (
              <CardDescription>{activity.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-4  ">
            <div className="grid gap-4 ">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                className="w-full lg:w-[410px]"
                size={32}
                {...register("name")}
              />
              {errors?.name && (
                <p className="px-1 text-xs text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">
                Description{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="description"
                className="w-full h-[90px] lg:w-[410px]"
                {...register("description")}
              />
              {errors?.description && (
                <p className="px-1 text-xs text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="grid   gap-3">
              <Label>Color</Label>
              <HexColorPicker
                className="w-full "
                color={color}
                onChange={setColor}
              />
            </div>
          </CardContent>
          <CardFooter>
            <button
              type="submit"
              className={cn(buttonVariants(), className)}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              <span>Save changes</span>
            </button>
          </CardFooter>
        </div>
        <div className=" justify-center hidden 2xl:block  items-center w-full h-full ">
          <LampDemo />
        </div>
      </Card>
    </form>
  );
}
