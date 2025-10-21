import type { Metadata } from "next";
import { Section } from "@/components/section";
import { AccessibilityNote } from "@/components/accessibility-note";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Hearthfire’s accessibility commitments: ADA venues, ramps, restrooms, sensory support, and leadership check-ins."
};

export default function AccessibilityPage() {
  return (
    <Section
      id="accessibility"
      title="Accessibility Commitments"
      description="Every gathering is planned with mobility, sensory, and neurodivergent needs in mind."
    >
      <AccessibilityNote>
        We welcome mobility devices, stimming tools, headphones, and any comfort
        items that help you feel at ease. Please let us know if there is anything
        else that will support your participation—we will work with you.
      </AccessibilityNote>

      <h3 className="font-serif text-2xl text-ember">Venue Standards</h3>
      <ul className="mt-3 space-y-2 text-sm text-bone/85 sm:text-base">
        <li>We only book ADA-compliant sites with solid paths, ramps, and accessible restrooms.</li>
        <li>Priority parking is reserved close to the gathering space.</li>
        <li>Food and ritual spaces accommodate wheelchairs and other mobility aids.</li>
      </ul>

      <h3 className="mt-8 font-serif text-2xl text-ember">Sensory Support</h3>
      <ul className="mt-3 space-y-2 text-sm text-bone/85 sm:text-base">
        <li>Quiet decompression spaces are available; ask any leader for directions.</li>
        <li>We encourage headphones, sunglasses, fidgets, and other tools that help you regulate.</li>
        <li>Leaders check in throughout the day to adjust lighting, volume, or pace as needed.</li>
      </ul>

      <h3 className="mt-8 font-serif text-2xl text-ember">Communication</h3>
      <p>
        Tell us about access needs before or during an event. We assign a point
        person to follow up, gather feedback, and track improvements across
        gatherings. Zero stigma, always—your comfort helps keep the flame strong.
      </p>
    </Section>
  );
}
