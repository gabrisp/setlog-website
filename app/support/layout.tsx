import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Creatinely. Contact us or browse frequently asked questions.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
