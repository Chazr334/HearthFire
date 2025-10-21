import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ title, children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ember/60 bg-charcoal/70 p-6 shadow-ember transition hover:border-ember hover:shadow-ember/80",
        className
      )}
    >
      <h3 className="font-display text-2xl text-ember">{title}</h3>
      <div className="mt-3 space-y-2 text-sm text-bone/85 sm:text-base">
        {children}
      </div>
    </div>
  );
}
