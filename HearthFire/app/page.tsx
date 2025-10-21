import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Callout } from "@/components/callout";
import { AccessibilityNote } from "@/components/accessibility-note";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        id="light-the-fire"
        title="Light the Fire"
        description="We gather as kin by choice, weaving modern lives with ancestral memory while honoring every story carried into the circle."
      >
        <p>
          Hearthfire rose from a handful of friends who believed that sacred
          hospitality is a craft worth tending. We carry forward Heathen
          tradition with reverence for history, curiosity for living practice,
          and a commitment to share warmth with anyone seeking it.
        </p>
        <p>
          Each rite, story, and shared meal turns the wheel again—home → community
          → divine → home. Together we remember that the flame does not belong to
          one bloodline, but to all who keep it with honesty and care.
        </p>
      </Section>

      <Section
        id="keep-the-flame"
        title="Keep the Flame"
        description="Belief, craft, and kinship live side by side. We welcome seekers, scholars, families, and the simply curious."
      >
        <p>
          Our hall is pluralistic and welcoming. You will meet devotees of the
          Aesir and Vanir, animists in dialogue with landwights, and neighbors who
          come for community first. We ask only for mutual respect, honest
          curiosity, and a willingness to tend the fire with others.
        </p>
        <AccessibilityNote>
          We plan every gathering with mobility, sensory, and neurodivergent
          access top of mind—ramps, restrooms, and quiet spaces are part of our
          standard kit.
        </AccessibilityNote>
      </Section>

      <Section
        id="share-the-warmth"
        title="Share the Warmth"
        description="Step in, learn more, and prepare for your first visit."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Callout title="Accessibility">
            <p>
              Our venues are ADA-compliant with ramps, accessible restrooms, and
              close parking. We invite comfort tools, stimming devices, and quiet
              breaks whenever you need them.
            </p>
            <Link href="/accessibility" className="font-semibold text-iron">
              Review accessibility support →
            </Link>
          </Callout>
          <Callout title="Rules & Etiquette">
            <p>
              Consent, respect, and safety keep the circle whole. Please review
              our etiquette so every guest can relax into the ritual space.
            </p>
            <Link href="/policies" className="font-semibold text-iron">
              Read gathering guidelines →
            </Link>
          </Callout>
          <Callout title="Reach Out">
            <p>
              We are happy to answer questions, connect you with volunteer teams,
              or plan accommodations in advance.
            </p>
            <Link href="/contact" className="font-semibold text-iron">
              Contact Hearthfire →
            </Link>
          </Callout>
        </div>
      </Section>
    </>
  );
}
