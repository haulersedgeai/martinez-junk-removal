import type { MetadataRoute } from "next";

const siteUrl = "https://martinezjunkremoval.net";

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/dumpster-rental", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/service-area", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/reviews", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
