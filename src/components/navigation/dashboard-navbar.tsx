"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import UserAccount from "../user-account";
import Image from "next/image";
import { SidebarMenu } from "../home-layout/sidebar-menu";
import { ThemeToggle } from "@/home-components/theme-toggle";

interface Props {
  isPro: boolean;
}

const DashboardNavbar = ({ isPro }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="sticky top-0 inset-x-0 h-[60px] md:h-[70px] w-full px-2 sm:px-4 border-b border-border  
     dark:bg-black200 backdrop-blur-md z-50"
    >
      <div className="w-full h-full flex items-center justify-between mx-auto">
        <div className="flex items-center gap-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="sm:hidden hover:translate-y-0"
              >
                <MenuIcon className="w-4 h-4" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <Link href="/" className="flex items-center gap-1">
                <div className="">
                  <Image
                    src="/expressions/good.png"
                    alt="No result illustration"
                    width={32}
                    height={32}
                    className="block object-contain  "
                  />
                </div>

                <p className="text-18-bold  ">
                  Mind{" "}
                  <span className="text-18-bold text-primary-500 dark:text-[#9077FE]">
                    Well
                  </span>
                </p>
              </Link>

              <div>
                <SheetClose asChild>
                  <SidebarMenu show={false} setIsOpen={setIsOpen} />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center justify-center   ">
            <Link href="/dashboard" className="flex items-center gap-2">
              <h2 className="font-semibold hidden md:inline-flex">
                Your Companion for Empowered Mental Wellness
              </h2>
            </Link>
          </div>
        </div>

        <div className="flex justify-center   h-full gap-4 md:gap-6 items-center">
          <div>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-4">
            {!isPro && (
              <Button asChild size="sm" variant="secondary">
                <Link href="/dashboard/account/billing">Upgrade</Link>
              </Button>
            )}
            <UserAccount />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
