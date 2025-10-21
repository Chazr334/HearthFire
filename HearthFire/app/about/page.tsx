import type { Metadata } from "next";
import { Section } from "@/components/section";
import { RuneDivider } from "@/components/rune-divider";

export const metadata: Metadata = {
  title: "About & Belief",
  description:
    "Hearthfire’s statement of belief and living Heathen practice rooted in history, reciprocity, and welcome."
};

export default function AboutPage() {
  return (
    <>
      <Section
        id="belief"
        title="Statement of Basic Belief"
        description="We keep faith with community, with ancestors whose stories guide us, and with the land that shelters our fire."
      >
        <p>
          Hearthfire practices inclusive, historically-informed Heathenry. We
          honor the Aesir and Vanir, the spirits of land and home, and the
          resilient human kin who stand beside us. Tradition is a living flame—it
          thrives when tended with respect, shared scholarship, and open hands.
        </p>
        <p>
          We hold fast to reciprocity, hospitality, and truthful speech. Each
          guest brings their own hearthstone, their own story; we welcome them
          without gate or test. Those who act with honor, protect the vulnerable,
          and labor for collective good are kin within this hall.
        </p>
        <RuneDivider />
      </Section>

      <Section
        id="heathenry"
        title="What Is Heathenry?"
        description="Ancestral threads woven into modern hands."
      >
        <p>
          Heathenry is a polytheistic tradition rooted in Germanic cultures. We
          work with the gods and goddesses known as the Aesir and Vanir, with
          wights of land and home, and with honored ancestors whose memory guides
          our conduct. Lore provides compass points; lived experience, research,
          and local land relationships complete the map.
        </p>
        <p>
          Core values include reciprocity, courage, industriousness, and mindful
          stewardship. Oaths and promises are sacred. Kinship extends beyond
          blood to chosen family and community. By tending ritual cycles, sharing
          meals, and sustaining mutual aid, we keep ancient virtues alive in the
          present day.
        </p>
      </Section>
    </>
  );
}
