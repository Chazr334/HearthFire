import type { MetadataRoute } from "next";
import { navigationLinks, events } from "@/lib/data";

const baseUrl = "https://hearthfire.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navigationLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("/"));

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    ...pages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date()
    })),
    ...events
      .filter((event) => event.href && event.href.startsWith("/"))
      .map((event) => ({
        url: `${baseUrl}${event.href}`,
        lastModified: new Date(event.dateTime)
      }))
  ];
}
