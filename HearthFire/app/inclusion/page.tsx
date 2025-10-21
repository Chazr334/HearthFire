import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { declarationOfFlamesUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Community & Inclusion",
  description:
    "Hearthfire’s Declaration of Flames: zero tolerance for racism, bigotry, or exclusion. Honor and welcome define our hall."
};

export default function InclusionPage() {
  return (
    <Section
      id="inclusion"
      title="Declaration of Flames"
      description="We stand guard against hatred so every voice may be heard."
    >
      <p>
        No flame of hatred burns here. Hearthfire stands for honor, not
        exclusion. We reject white supremacy, folkish ideology, antisemitism,
        racism, misogyny, queerphobia, transphobia, ableism, xenophobia, and any
        belief that seeks to diminish or expel others. The good fire is shared,
        and so is the responsibility to keep it safe.
      </p>
      <p>
        Guests, members, and leaders alike commit to the Declaration of Flames.
        We step in when harm occurs, prioritize those targeted, and remove anyone
        who refuses to align with our standards. Compassion guides our speech,
        but firmness guards our community.
      </p>
      <p>
        If you spot behavior that contradicts this stance, tell leadership
        immediately. We follow up with accountability conversations, restorative
        practices when possible, and removal when necessary.
      </p>
      <Link
        href={declarationOfFlamesUrl}
        className="inline-flex w-fit items-center gap-2 rounded-full border border-iron px-5 py-3 text-sm font-semibold text-iron transition hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      >
        Read the full Declaration
      </Link>
    </Section>
  );
}
