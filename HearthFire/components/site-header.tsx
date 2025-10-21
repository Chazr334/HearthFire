"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-iron/40 bg-charcoal/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
          onClick={closeMenu}
        >
          <Image
            src="/logo.svg"
            alt="Hearthfire flame mark"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg uppercase tracking-[0.3em] text-ember">
              Hearthfire
            </span>
            <span className="text-xs text-bone/70">
              Light the Fire • Keep the Flame
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-iron/60 p-2 text-bone shadow-sm transition hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber sm:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="primary-navigation"
          className="hidden gap-6 text-sm font-semibold text-bone/80 sm:flex"
          aria-label="Primary"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2 transition hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav
        className={cn(
          "sm:hidden",
          isOpen ? "block" : "hidden"
        )}
        aria-label="Mobile Primary Navigation"
      >
        <ul className="space-y-1 border-t border-iron/40 bg-charcoal/95 px-4 py-4 shadow-lg">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-full border border-iron/40 px-4 py-3 text-sm font-semibold text-bone transition hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
