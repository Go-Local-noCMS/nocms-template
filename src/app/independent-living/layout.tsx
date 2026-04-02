import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent Living | Golden Grove Senior Living",
  description: "Vibrant, maintenance-free senior living with resort-style amenities, chef-prepared dining, and active social programming. Discover independent living at Golden Grove.",
  openGraph: {
    title: "Independent Living",
    description: "Vibrant, maintenance-free senior living with resort-style amenities, chef-prepared dining, and active social programming. Discover independent living at Golden Grove.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
