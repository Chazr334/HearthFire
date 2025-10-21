import Link from "next/link";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import { Event } from "@/lib/data";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className }: EventCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl border border-ember/40 bg-charcoal/80 p-6 shadow-inner-ember transition hover:border-ember hover:shadow-ember",
        className
      )}
    >
      <header className="space-y-1">
        <p className="font-serif text-sm uppercase tracking-[0.3em] text-ember/80">
          {event.type}
        </p>
        <h3 className="font-display text-2xl text-ember">{event.title}</h3>
      </header>
      <dl className="mt-4 space-y-2 text-sm text-bone/80">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-iron" aria-hidden="true" />
          <dt className="sr-only">Date</dt>
          <dd className="text-base">
            <time dateTime={event.dateTime}>{event.date}</time>
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-iron" aria-hidden="true" />
          <dt className="sr-only">Location</dt>
          <dd className="text-base">{event.location}</dd>
        </div>
      </dl>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-bone/85 sm:text-base">
        {event.summary}
      </p>
      {event.tags?.length ? (
        <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-ember">
          {event.tags.map((tag) => (
            <li
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-iron/50 px-3 py-1 text-[0.7rem] text-iron"
            >
              <Tag className="h-3 w-3" aria-hidden="true" />
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {event.href ? (
        <Link
          href={event.href}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-iron px-4 py-2 text-sm font-semibold text-iron transition hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
        >
          Learn More
        </Link>
      ) : null}
    </article>
  );
}
