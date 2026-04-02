import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Golden Grove Senior Living",
  description: "Answers to common questions about senior living costs, care levels, daily life, and what to expect at Golden Grove communities.",
  openGraph: {
    title: "FAQ",
    description: "Answers to common questions about senior living costs, care levels, daily life, and what to expect at Golden Grove communities.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
