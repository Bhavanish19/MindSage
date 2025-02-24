import React from "react";
import { DashboardNavbar } from "@/components";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib";
import AdminPanelLayout from "@/components/home-layout/admin-panel-layout";

interface Props {
  children: React.ReactNode;
}

const VideoLayout = async ({ children }: Props) => {
  const user = await currentUser();

  const dbUser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      symptoms: true,
      medications: true,
      mentalwellness: true,
    },
  });

  if (!dbUser) {
    redirect("/onboarding?step=1");
  }

  const isPro = true;

  return (
    <main className="mx-auto  w-full min-h-screen relative">
      <DashboardNavbar isPro={isPro} />

      <div className="flex  dark:bg-black100 justify-center px-2   bg-white pt-[50px] lg:pt-0   w-full">
        <div className="w-full  max-w-[1400px]  md:mt-4    h-full min-h-screen flex flex-col ">
          {children}
        </div>
      </div>
    </main>
  );
};

export default VideoLayout;
