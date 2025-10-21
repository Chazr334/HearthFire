"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { RuneDivider } from "./rune-divider";

interface HeroProps {
  className?: string;
}

const CTA_LINKS = [
  { href: "/events", label: "Upcoming Gatherings" },
  { href: "/field-guide", label: "Field Guide" }
];

export function Hero({ className }: HeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const emberParticles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      animationDelay: `${index * 0.35}s`,
      duration: `${6 + Math.random() * 4}s`
    }));
  }, []);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-ember/40 bg-charcoal/90 px-6 py-16 shadow-inner-ember sm:px-12 sm:py-24",
        "before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-gradient-to-b before:from-iron/30 before:to-transparent before:content-['']",
        className
      )}
    >
      <div className="absolute inset-0 bg-radial-ember opacity-80" />
      {!prefersReducedMotion ? (
        <div className="ember-particles">
          {emberParticles.map((particle) => (
            <span
              key={particle.id}
              aria-hidden="true"
              className="ember-particle"
              style={{
                left: particle.left,
                animationDelay: particle.animationDelay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>
      ) : null}

      <div className="relative z-10 space-y-8 text-center sm:text-left">
        <p className="inline-flex rounded-full border border-iron/40 bg-charcoal/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ember/90">
          Light the Fire • Keep the Flame
        </p>
        <div className="space-y-4">
          <h1 className="font-display text-4xl leading-tight text-ember sm:text-5xl lg:text-6xl">
            Hearthfire
          </h1>
          <p className="font-serif text-xl text-bone/80 sm:text-2xl">
            All who seek wisdom, kinship, and the light of the hearth are
            welcome within our circle.
          </p>
        </div>
        <RuneDivider />
        <div className="mx-auto flex flex-col items-center gap-4 sm:mx-0 sm:flex-row">
          {CTA_LINKS.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full border border-iron bg-iron/10 px-6 py-3 text-sm font-semibold text-bone transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber",
                "hover:border-ember hover:text-ember"
              )}
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
