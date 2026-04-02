import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Golden Grove Senior Living",
  description: "For over 25 years, Golden Grove has been guided by a simple belief: every person deserves to age with dignity, purpose, and joy.",
  openGraph: {
    title: "About Us",
    description: "For over 25 years, Golden Grove has been guided by a simple belief: every person deserves to age with dignity, purpose, and joy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
