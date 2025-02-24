"use client";

import Link from "next/link";
import { Ellipsis, LogOut, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { getMenuList } from "@/lib/menu-list";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/home-layout/collapse-menu-button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block    ">
      <nav className=" pt-3 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(98vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-sm flex justify-center items-center gap-2 font-medium text-muted-foreground px-4 pb-2  max-w-[248px] truncate">
                  {groupLabel}{" "}
                  <div className="w-full h-[1px] bg-slate-400"> </div>
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="pb-2"> </p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={active ? "secondary" : "ghost"}
                              className="w-full justify-start mt-1 capitalize active:text-white dark:text-gray-100  font-bold h-10 mb-1"
                              asChild
                            >
                              <Link href={href}>
                                <span
                                  className={cn(isOpen === false ? "" : "mr-4")}
                                >
                                  <Icon size={20} />
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] text-[15px] font-semibold ",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100"
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
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
                      <Settings
                        size={20}
                        className={cn("shrink-0", isOpen && "mr-4")}
                      />
                      <span
                        className={cn(
                          "transition-all duration-200",
                          isOpen
                            ? "opacity-100"
                            : "opacity-0 w-0 overflow-hidden"
                        )}
                      >
                        SETTINGS
                      </span>
                    </Button>
                  </Link>
                </TooltipTrigger>
                {!isOpen && (
                  <TooltipContent side="right">Settings</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li> */}
        </ul>
      </nav>
    </ScrollArea>
  );
}
