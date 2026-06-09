import type { LucideIcon } from "lucide-react";
import {
  Dumbbell,
  Calendar,
  LayoutGrid,
  BarChart3,
  History,
  Zap,
  Cloud,
  Activity,
  Tablet,
  Shield,
} from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: "workout-logging",
    title: "Workout logging",
    description:
      "Log sets, reps, and weight for every exercise in a clean, fast interface built for the gym.",
    icon: Dumbbell,
  },
  {
    id: "calendar",
    title: "Training calendar",
    description:
      "See your workout history at a glance with a clear calendar view of your training.",
    icon: Calendar,
  },
  {
    id: "widgets",
    title: "Widgets",
    description:
      "Quick actions and your latest workout right on your Home Screen.",
    icon: LayoutGrid,
  },
  {
    id: "statistics",
    title: "Statistics",
    description:
      "Insights and charts to understand your volume, frequency, and personal records.",
    icon: BarChart3,
  },
  {
    id: "history",
    title: "Workout history",
    description:
      "Review all your past sessions and track how your performance evolves over time.",
    icon: History,
  },
  {
    id: "live-activity",
    title: "Live Activity",
    description:
      "Track your active workout from the Lock Screen and Dynamic Island in real time.",
    icon: Zap,
  },
  {
    id: "icloud",
    title: "iCloud sync",
    description:
      "Your data stays in sync across your iPhone and iPad securely.",
    icon: Cloud,
  },
  {
    id: "healthkit",
    title: "HealthKit integration",
    description:
      "Automatically write workouts to Apple Health to keep all your data in one place.",
    icon: Activity,
  },
  {
    id: "ipad",
    title: "iPad support",
    description:
      "Designed to work beautifully on both iPhone and iPad.",
    icon: Tablet,
  },
  {
    id: "privacy",
    title: "Privacy",
    description:
      "Privacy-first. No unnecessary accounts—just what you need.",
    icon: Shield,
  },
];
