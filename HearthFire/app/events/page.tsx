import type { Metadata } from "next";
import { Section } from "@/components/section";
import { RuneDivider } from "@/components/rune-divider";
import { EventCard } from "@/components/event-card";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rituals & Events",
  description:
    "Learn how Hearthfire gatherings flow, from horgr rites to community feasts, and explore upcoming events."
};

export default function EventsPage() {
  return (
    <>
      <Section
        id="gatherings"
        title="How Our Gatherings Work"
        description="Ritual, fellowship, and shared stewardship follow the rhythm of the horgr cycle."
      >
        <p>
          Each soul bears a stone from their own hearth, to bind home to hall,
          self to kin. We shape the horgr together, kindle the flame, and offer
          words and libations in turn. When the rite concludes, we carry the
          blessed stones home so the circle of care remains unbroken—home →
          community → divine → home again.
        </p>
        <p>
          After ritual we share a potluck meal, swap stories, and welcome
          questions from new guests. Volunteers remain on site for cleanup and
          debrief before the flame is respectfully quenched.
        </p>
        <RuneDivider />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-iron/40 bg-charcoal/70 p-6 shadow-inner-ember">
            <h3 className="font-serif text-xl text-ember">Logistics</h3>
            <ul className="mt-3 space-y-2 text-sm text-bone/85">
              <li>Arrive around 10:00 AM for setup; ritual typically begins at noon.</li>
              <li>Community potluck and grill—label dishes and note allergens clearly.</li>
              <li>Clean drinking water is provided; bring a reusable cup or bottle.</li>
              <li>Dogs may attend on a 6-foot leash with attentive handlers.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-iron/40 bg-charcoal/70 p-6 shadow-inner-ember">
            <h3 className="font-serif text-xl text-ember">Safety & Boundaries</h3>
            <ul className="mt-3 space-y-2 text-sm text-bone/85">
              <li>No alcohol or drugs are permitted at Hearthfire events.</li>
              <li>Firearms remain secured within vehicles; ritual blades allowed with care.</li>
              <li>We maintain a sober, family-friendly environment. Leaders may ask anyone to leave if conduct endangers the circle.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="upcoming-events"
        title="Upcoming Gatherings"
        description="Seeded events offer a template—more will appear as the calendar grows."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </Section>
    </>
  );
}
