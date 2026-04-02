import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assisted Living | Golden Grove Senior Living",
  description: "Personalized support with daily activities in a warm, home-like environment. 24/7 care team, medication management, and life enrichment programs.",
  openGraph: {
    title: "Assisted Living",
    description: "Personalized support with daily activities in a warm, home-like environment. 24/7 care team, medication management, and life enrichment programs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
