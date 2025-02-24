"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  Credenza,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";
import { RainbowButton } from "../ui/rainbow-button";

interface ActivityAddButtonProps extends ButtonProps {}

export function ActivityAddButton({ ...props }: ActivityAddButtonProps) {
  const router = useRouter();
  const [showAddAlert, setShowAddAlert] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onClick() {
    setIsLoading(true);

    const response = await fetch("/api/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New Habit ",
        color_code: "#ffffff",
      }),
    });

    if (!response?.ok) {
      setIsLoading(false);
      setShowAddAlert(false);
      return toast({
        title: "Something went wrong.",
        description: "Your activity was not created. Please try again.",
        variant: "destructive",
      });
    }

    const activity = await response.json();

    setIsLoading(false);
    setShowAddAlert(false);

    router.push(`/dashboard/activities/${activity.id}/settings`);
    router.refresh();
  }

  return (
    <>
      {/* <Button onClick={() => setShowAddAlert(true)} {...props}></Button> */}
      <RainbowButton
        className="font-bold dark:text-black"
        onClick={() => setShowAddAlert(true)}
        {...props}
      >
        {" "}
        <Icons.add className="mr-2 h-4 w-4" />
        New Habit
      </RainbowButton>
      {/* Add Alert */}
      <Credenza open={showAddAlert} onOpenChange={setShowAddAlert}>
        <CredenzaContent className="md:max-w-[470px]">
          <CredenzaHeader>
            <CredenzaTitle className="font-bold leading-6">
              You're on the right track! 🌟
            </CredenzaTitle>
            <CredenzaDescription>
              Every small step you take brings you closer to your goals. Keep
              pushing forward and let this new habit empower your journey!
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaFooter className="flex flex-col-reverse">
            <CredenzaClose asChild>
              <Button variant="outline">Cancel</Button>
            </CredenzaClose>
            <Button onClick={onClick} disabled={isLoading}>
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.add className="mr-2 h-4 w-4" />
              )}
              <span>Add Habit</span>
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  );
}
