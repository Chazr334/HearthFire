import type { Metadata } from "next";
import { events, socialLinks } from "./data";

const baseUrl = "https://hearthfire.org";

export const siteMetadata = {
  name: "Hearthfire",
  description:
    "Hearthfire is an inclusive, historically-informed Heathen community in Asheville, NC. We gather for ritual, kinship, and shared stewardship.",
  url: baseUrl,
  locale: "en_US",
  titleTemplate: "%s • Hearthfire",
  defaultTitle: "Hearthfire — Light the Fire • Keep the Flame"
};

export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: siteMetadata.defaultTitle,
    description: siteMetadata.description,
    applicationName: siteMetadata.name,
    openGraph: {
      type: "website",
      url: siteMetadata.url,
      title: siteMetadata.defaultTitle,
      description: siteMetadata.description,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale
    },
    twitter: {
      card: "summary_large_image",
      title: siteMetadata.defaultTitle,
      description: siteMetadata.description
    },
    alternates: {
      canonical: "/"
    }
  };
}

export function buildStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.url,
    slogan: "Light the Fire • Keep the Flame",
    description: siteMetadata.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Asheville",
      addressRegion: "NC",
      postalCode: "28801",
      addressCountry: "US"
    },
    sameAs: socialLinks.map((link) => link.href).filter((href) => href !== "#")
  };

  const eventEntries = events.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    startDate: event.dateTime,
    endDate: event.dateTime,
    location: {
      "@type": "Place",
      name: event.location,
      address: event.location
    },
    description: event.summary,
    organizer: {
      "@type": "Organization",
      name: siteMetadata.name,
      url: siteMetadata.url
    }
  }));

  return [organization, ...eventEntries];
}
