import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "/communities", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/independent-living", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/assisted-living", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/memory-care", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/blog", changeFrequency: "weekly" as const, priority: 0.6 },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
