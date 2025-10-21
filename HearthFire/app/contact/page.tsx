import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Hearthfire leadership with questions, volunteer interest, accessibility requests, or media inquiries."
};

export default function ContactPage() {
  return (
    <Section
      id="contact"
      title="Contact Hearthfire"
      description="Send a note to our leadership circle or connect through social channels."
    >
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <ContactForm />
        <aside className="space-y-6 rounded-3xl border border-iron/40 bg-charcoal/70 p-6 shadow-inner-ember">
          <div>
            <h2 className="font-display text-2xl text-ember">Auto-Response</h2>
            <p className="mt-2 text-sm text-bone/80">
              Thanks for reaching out to Hearthfire. A member of our leadership
              circle will respond within three evenings. If your note is urgent,
              mention it in the subject line and we will prioritize accordingly.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-ember">Additional Contacts</h3>
            <ul className="mt-2 space-y-2 text-sm text-bone/75">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg text-ember">Meeting Address</h3>
            <p className="text-sm text-bone/70">
              0000 Grove Way, Asheville, NC 28801
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
