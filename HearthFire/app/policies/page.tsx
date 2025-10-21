import type { Metadata } from "next";
import { Section } from "@/components/section";
import { PolicyList } from "@/components/policy-list";

export const metadata: Metadata = {
  title: "Rules & Etiquette",
  description:
    "Hearthfire gathering guidelines covering respect, consent, safety, food, photography, and disciplinary actions."
};

const policies = [
  {
    title: "Respect Every Person",
    description:
      "Speak and act with care toward adults, kids, volunteers, and pets. Aggression, harassment, or hateful speech is not tolerated."
  },
  {
    title: "Consent Is Required",
    description:
      "Ask before hugging or touching anyone. A clear yes matters; silence is not consent."
  },
  {
    title: "Parents Stay Present",
    description:
      "Parents and guardians supervise their own children. Do not pick up or discipline other people’s kids—flag a leader if support is needed."
  },
  {
    title: "Steward Belongings",
    description:
      "Respect personal gear and altars. Lost-and-found items go to the hospitality table so their owners can reclaim them after the rite."
  },
  {
    title: "Food Safety",
    description:
      "Label dishes with common allergens. If you have severe allergies, please bring personal food and let leadership know so we can help."
  },
  {
    title: "Photography & Media",
    description:
      "Ask before taking photos or video. No candid or professional shoots without prior approval, and drones are not permitted."
  },
  {
    title: "Smoking & Substances",
    description:
      "No alcohol or drugs on site. Smoking and vaping happen away from the circle—watch the wind and keep distance from the food line."
  },
  {
    title: "Weapons & Tools",
    description:
      "Firearms stay secured in vehicles. Ritual blades are welcome when handled responsibly and sheathed outside ritual use."
  },
  {
    title: "Tend the Space",
    description:
      "Keep ritual areas quiet, label your dishes and gear, and follow instructions from event leads during setup, rite, and teardown."
  },
  {
    title: "Accountability",
    description:
      "Leadership addresses issues promptly and may ask someone to leave. Ongoing disciplinary actions remain at leadership discretion."
  }
];

export default function PoliciesPage() {
  return (
    <Section
      id="policies"
      title="Rules & Etiquette"
      description="These guidelines keep the space safe, welcoming, and well-organized for everyone."
    >
      <PolicyList items={policies} />
    </Section>
  );
}
