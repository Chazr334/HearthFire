import Link from "next/link";
import { navigationLinks, socialLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-iron/40 bg-charcoal/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="font-display text-xl text-ember">Hearthfire</p>
          <p className="text-sm text-bone/70">
            Light the Fire • Keep the Flame. An inclusive, historically-rooted
            Heathen community gathering in Asheville, NC.
          </p>
          <p className="text-sm text-bone/60">
            0000 Grove Way • Asheville, NC 28801 • gatherings@hearthfire.org
          </p>
          <p className="text-xs text-bone/50">
            Hearthfire affirms every seeker&apos;s worth. No flame of hatred
            burns here.
          </p>
        </div>
        <div className="grid flex-1 gap-8 text-sm text-bone/80 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-serif text-ember">Navigate</p>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-serif text-ember">Connect</p>
            <ul className="space-y-2">
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
            <p className="mb-3 font-serif text-ember">Inclusivity</p>
            <p className="text-sm text-bone/70">
              We welcome all genders, races, ancestries, abilities, and
              families. Leadership sustains ongoing accessibility check-ins and
              restorative conversations.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-iron/40 bg-charcoal/95 py-4 text-center text-xs text-bone/50">
        © {new Date().getFullYear()} Hearthfire. Crafted with reverence for kin,
        land, and lore.
      </div>
    </footer>
  );
}
