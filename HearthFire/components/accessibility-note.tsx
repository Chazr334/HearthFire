import { Accessibility } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccessibilityNoteProps {
  children: ReactNode;
  className?: string;
}

export function AccessibilityNote({
  children,
  className
}: AccessibilityNoteProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-moss/50 bg-charcoal/80 p-4 text-sm text-bone/90 shadow-inner-ember sm:text-base",
        className
      )}
    >
      <Accessibility className="mt-1 h-6 w-6 flex-shrink-0 text-moss" />
      <div>{children}</div>
    </div>
  );
}
