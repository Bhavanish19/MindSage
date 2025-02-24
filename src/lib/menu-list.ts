import { LucideIcon } from "lucide-react";

import {
  LayoutGrid,
  NotepadText,
  Stethoscope,
  HeartPulse,
  Bot,
  Headphones,
  MessageCircle,
  BookOpen,
} from "lucide-react";
import { PersonStanding } from "lucide-react";
import { Brain } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },

    {
      groupLabel: "MindSage Activities",
      menus: [
        {
          href: "/dashboard/activities",
          label: "Building Habits",
          active: pathname.includes("/dashboard/activities"),
          icon: NotepadText,
          submenus: [],
        },
        {
          href: "/dashboard/your-progress",
          label: "Activity Summary",
          active: pathname.includes("/dashboard/your-progress"),
          icon: Stethoscope,
          submenus: [],
        },
      ],
    },

    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/dashboard/guidance",
          label: "Guidance",
          active: pathname.includes("/dashboard/guidance"),
          icon: Brain,
          submenus: [],
        },
        {
          href: "/dashboard/health-status",
          label: "Health Status",
          active: pathname.includes("/dashboard/health-status"),
          icon: HeartPulse,
          submenus: [],
        },
        {
          href: "/dashboard/health-tips",
          label: "Health Tips",
          active: pathname.includes("/dashboard/health-tips"),
          icon: NotepadText,
          submenus: [],
        },
        {
          href: "/dashboard/ai",
          label: "AI Chat",
          active: pathname.includes("/dashboard/ai"),
          icon: Bot,
          submenus: [],
        },
        {
          href: "/dashboard/meetings",
          label: "Meetings",
          active: pathname.includes("/dashboard/meetings"),
          icon: Stethoscope,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Explore Therapy",
      menus: [
        {
          href: "/dashboard/audio-theraphy",
          label: "Audio Therapy",
          active: pathname.includes("/dashboard/audio-theraphy"),
          icon: Headphones,
          submenus: [],
        },
        {
          href: "/dashboard/yoga",
          label: "Yoga Therapy",
          active: pathname.includes("/dashboard/yoga"),
          icon: PersonStanding,
          submenus: [],
        },
        {
          href: "/dashboard/talking-thearphy",
          label: "Talking Therapy",
          active: pathname.includes("/dashboard/talking-thearphy"),
          icon: MessageCircle,
          submenus: [],
        },
        {
          href: "/dashboard/reading-theraphy",
          label: "Reading Therapy",
          active: pathname.includes("/dashboard/reading-theraphy"),
          icon: BookOpen,
          submenus: [],
        },
      ],
    },
  ];
}
