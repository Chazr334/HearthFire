export interface Event {
  title: string;
  date: string;
  dateTime: string;
  location: string;
  summary: string;
  type: string;
  tags?: string[];
  href?: string;
}

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & Belief" },
  { href: "/inclusion", label: "Community & Inclusion" },
  { href: "/events", label: "Rituals & Events" },
  { href: "/field-guide", label: "Field Guide" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/policies", label: "Rules & Etiquette" },
  { href: "/contact", label: "Contact" }
];

export const events: Event[] = [
  {
    title: "First Flame: Spring Horgr Rite",
    date: "April 20, 2025 • 11:00 AM",
    dateTime: "2025-04-20T11:00:00-04:00",
    location: "Stonebridge Park Pavilion, Asheville NC",
    summary:
      "We kindle the first communal fire of the season, share the story of the returning light, and invite all to lay a stone upon the horgr for blessings returned home.",
    type: "Seasonal Gathering",
    tags: ["Ritual", "Potluck", "Family Friendly"],
    href: "#"
  },
  {
    title: "Fieldcraft Workshop: Tools of Hospitality",
    date: "May 18, 2025 • 10:00 AM",
    dateTime: "2025-05-18T10:00:00-04:00",
    location: "Raven's Reach Meadow, Asheville NC",
    summary:
      "Hands-on skillshare focused on setting sacred space, crafting offerings, and guiding new guests through Hearthfire traditions with warmth and care.",
    type: "Workshop",
    tags: ["Education", "Volunteer Training"]
  },
  {
    title: "Midsummer Moot & Community Feast",
    date: "June 22, 2025 • 12:00 PM",
    dateTime: "2025-06-22T12:00:00-04:00",
    location: "Suncrest Grove, Asheville NC",
    summary:
      "A celebration beneath the longest sun with storytelling, circle to honor kin and land, and a generous meal offered by many hands.",
    type: "Festival",
    tags: ["Feast", "Storytelling", "Marketplace"],
    href: "#"
  }
];

export const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Discord" },
  { href: "#", label: "Email Newsletter" }
];

export const declarationOfFlamesUrl = "#";

export const contactTopics = [
  { value: "general", label: "General Question" },
  { value: "gatherings", label: "Gathering Attendance" },
  { value: "volunteering", label: "Volunteer Interest" },
  { value: "accessibility", label: "Accessibility Request" },
  { value: "media", label: "Media Inquiry" }
];
