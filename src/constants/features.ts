import {
  Brain, // for cognitive wellness
  Sparkles, // for AI features
  ActivitySquare, // for activity tracking
  MessageCircle, // for therapy sessions
  Heart, // for emotional wellness
  Headphones, // for audio therapy
  BookOpen, // for reading therapy
  LucideIcon,
  SmileIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  info: string;
};
import { BrainCircuit } from "lucide-react";
import { HeartPulse } from "lucide-react";

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "Mental Health Assessment",
    info: "Get personalized mental wellness evaluations and track your progress over time.",
  },
  {
    icon: MessageCircle,
    title: "Therapy Sessions",
    info: "Connect with professional therapists through secure video or chat sessions.",
  },
  {
    icon: Sparkles,
    title: "AI Wellness Assistant",
    info: "24/7 AI-powered support for guidance, coping strategies, and emotional check-ins.",
  },
  {
    icon: BrainCircuit,
    title: "Mindfulness & Meditation",
    info: "Access guided meditation, breathing exercises, and yoga sessions for inner peace.",
  },
  {
    icon: ActivitySquare,
    title: "Progress Tracking",
    info: "Monitor your mood patterns, sleep quality, and wellness activities in one place.",
  },
  {
    icon: SmileIcon,
    title: "Wellness Tips",
    info: "Get helpful tips for maintaining mental balance and boosting well-being.",
  },
];
