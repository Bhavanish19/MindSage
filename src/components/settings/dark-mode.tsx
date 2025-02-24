"use client";

import React from "react";

import { SystemMode } from "../themes-placeholder/systemmode";
import { LightMode } from "../themes-placeholder/lightmode";
import { DarkMode } from "../themes-placeholder/darkmode";
import { cn } from "@/lib";
import Section from "../section-label";
import { useThemeMode } from "@/hooks/settings/use-settings";

type Props = {};

const DarkModetoggle = (props: Props) => {
  const { setTheme, theme } = useThemeMode();

  return (
    <div className="grid grid-cols-1   w-full   lg:grid-cols-5 gap-10">
      <div className="lg:col-span-4 flex lg:flex-row flex-col items-start gap-5">
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme == "system" && "border-blue"
          )}
          onClick={() => setTheme("system")}
        >
          <SystemMode />
        </div>
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme == "light" && "border-blue"
          )}
          onClick={() => setTheme("light")}
        >
          <LightMode />
        </div>
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme == "dark" && "border-purple"
          )}
          onClick={() => setTheme("dark")}
        >
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default DarkModetoggle;
