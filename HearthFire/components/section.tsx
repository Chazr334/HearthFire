import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  title,
  description,
  className,
  children
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-ember/40 bg-charcoal/80 p-8 shadow-inner-ember backdrop-blur",
        "motion-safe:animate-in motion-safe:fade-in-5 motion-safe:slide-in-from-bottom-2 motion-reduce:animate-none",
        "sm:p-12",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-iron/40 via-ember/40 to-moss/40" />
      <header className="mb-8 space-y-2">
        <h2 className="font-display text-3xl tracking-wide text-ember sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base text-bone/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </header>
      <div className="space-y-6 text-base leading-relaxed text-bone/90 sm:text-lg">
        {children}
      </div>
    </section>
  );
}
