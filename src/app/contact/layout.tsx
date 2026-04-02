import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Tour | Golden Grove Senior Living",
  description: "Experience Golden Grove in person. Schedule a tour of our senior living communities. Tours available 7 days a week.",
  openGraph: {
    title: "Schedule a Tour",
    description: "Experience Golden Grove in person. Schedule a tour of our senior living communities. Tours available 7 days a week.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
