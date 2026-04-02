import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Communities | Golden Grove Senior Living",
  description: "Find a Golden Grove community near you. Browse 40+ senior living locations offering independent, assisted, and memory care nationwide.",
  openGraph: {
    title: "Our Communities",
    description: "Find a Golden Grove community near you. Browse 40+ senior living locations offering independent, assisted, and memory care nationwide.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
