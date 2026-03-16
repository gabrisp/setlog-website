import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Calendar,
  LayoutGrid,
  Target,
  History,
  BarChart3,
  Cloud,
  Palette,
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
    id: "reminders",
    title: "Reminders and notifications",
    description:
      "Recurring and “important” reminders keep you on track with your daily routine.",
    icon: Bell,
  },
  {
    id: "calendar",
    title: "Monthly calendar",
    description:
      "See your progress at a glance with a clear calendar view of your habit.",
    icon: Calendar,
  },
  {
    id: "widgets",
    title: "Widgets",
    description:
      "Weekly streak and quick actions right on your Home Screen.",
    icon: LayoutGrid,
  },
  {
    id: "habit-tracking",
    title: "Full habit tracking",
    description:
      "Complete follow-through of your creatine habit with a simple, focused flow.",
    icon: Target,
  },
  {
    id: "history",
    title: "History",
    description:
      "Review your past activity and build a clear picture of your consistency.",
    icon: History,
  },
  {
    id: "statistics",
    title: "Statistics",
    description:
      "Insights and stats to understand your progress over time.",
    icon: BarChart3,
  },
  {
    id: "icloud",
    title: "iCloud sync",
    description:
      "Your data stays in sync across your iPhone and iPad securely.",
    icon: Cloud,
  },
  {
    id: "customize",
    title: "Customize your jar",
    description:
      "Personalize the jar and accessories to make the experience yours.",
    icon: Palette,
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
