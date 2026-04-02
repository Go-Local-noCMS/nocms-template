import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Care | Golden Grove Senior Living",
  description: "Specialized, compassionate care for Alzheimer's and dementia in secure, thoughtfully designed neighborhoods with evidence-based programs.",
  openGraph: {
    title: "Memory Care",
    description: "Specialized, compassionate care for Alzheimer's and dementia in secure, thoughtfully designed neighborhoods with evidence-based programs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
