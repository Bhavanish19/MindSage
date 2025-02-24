"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { getMenuList } from "@/lib/menu-list";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib";

import React from "react";

interface Props {
  show?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SidebarMenu({ show = true, setIsOpen }: Props) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block    ">
      <nav className=" pt-3   h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(98vh-32px-40px-32px)] items-start space-y-1 px-1">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-0" : "")} key={index}>
              <p className="text-sm flex justify-center items-center gap-2 font-medium text-muted-foreground px-4 pb-0.5 max-w-[260px] truncate">
                {groupLabel}{" "}
                <div className="w-full h-[1px] bg-slate-400"> </div>
              </p>

              <p className="pb-2"> </p>

              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger
                            onClick={() => {
                              !show && setIsOpen && setIsOpen(false);
                            }}
                            className="w-full"
                            asChild
                          >
                            <Button
                              variant={active ? "secondary" : "ghost"}
                              className="w-full mt-1.5 justify-start dark:hover:bg-black300  capitalize active:text-white dark:text-gray-100  font-bold h-10 mb-1"
                              asChild
                            >
                              <Link href={href}>
                                <span className="mr-4">
                                  <Icon size={18} />
                                </span>
                                <p className={cn("max-w-[200px] ")}>{label}</p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {/* {isOpen === false && ( */}
                          <TooltipContent side="right">{label}</TooltipContent>
                          {/* )} */}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      {/* <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      /> */}
                    </div>
                  )
              )}
            </li>
          ))}

          {/* <li className="w-full    items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link href="/dashboard/account/settings" className="block">
                    <Button
                      variant="secondaryOutline"
                      className="w-full justify-start h-10 mt-5 transition-all duration-200"
                    >
                      <Settings size={20} className="mr-4" />
                      <span className={cn("transition-all duration-200")}>
                        SETTINGS
                      </span>
                    </Button>
                  </Link>
                </TooltipTrigger>

                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li> */}
        </ul>
      </nav>
    </ScrollArea>
  );
}
