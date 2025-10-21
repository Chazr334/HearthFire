import { CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PolicyListProps {
  items: Array<{ title: string; description: ReactNode }>;
  className?: string;
}

export function PolicyList({ items, className }: PolicyListProps) {
  return (
    <ul className={cn("space-y-5 text-base text-bone/90", className)}>
      {items.map((item) => (
        <li
          key={item.title}
          className="flex gap-4 rounded-2xl border border-smoke/40 bg-charcoal/80 p-4"
        >
          <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-iron" />
          <div>
            <h3 className="font-serif text-xl text-ember">{item.title}</h3>
            <div className="mt-1 text-sm leading-relaxed text-bone/80 sm:text-base">
              {item.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
