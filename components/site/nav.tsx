"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NalaLogo } from "@/components/site/logo";
import { WhatsappIcon } from "@/components/site/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Sticky navigation. At the top of the page it runs edge to edge with no
 * chrome; once the page scrolls it contracts into a narrower floating card —
 * white surface, 1px `--color-border`, `--shadow-card`, `--radius-lg`.
 *
 * That white card is what keeps the bar legible over every surface it passes:
 * the deep gradient hero, the closing gradient panel, and the light body
 * sections all sit far enough from white to read as separate.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only the bar's own contracted/expanded state is driven by scroll. This
    // deliberately does NOT close the mobile sheet: opening the sheet locks the
    // body, which fires a scroll event on mobile browsers, so closing here made
    // the menu shut the instant it was tapped anywhere below the top of the
    // page. The sheet lives inside the sticky header and travels with it, so
    // there is nothing to collapse in the first place.
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // No body scroll lock while the sheet is open, deliberately. Setting
  // `overflow: hidden` on body turns body into a non-scrolling container, and a
  // `position: sticky` header resolves against its nearest scrolling ancestor —
  // so the whole header, sheet included, snapped back to the top of the document
  // and vanished off-screen the moment the menu was opened anywhere below the
  // fold. The sheet is anchored under a sticky bar and travels with it, so the
  // page scrolling behind it is harmless.

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-6 border transition-all duration-300 ease-out",
          scrolled
            // Solid white, not translucent: even at 95% the dashboard mockup
            // and the hero gradient ghost through and the links stop being
            // cleanly legible.
            ? "mt-3 h-16 max-w-[880px] rounded-lg border-line bg-white px-4 shadow-card sm:px-5"
            : "mt-0 h-[88px] max-w-frame rounded-lg border-transparent bg-transparent px-0 shadow-none",
        )}
      >
        <a
          href="#top"
          className="flex shrink-0 items-center rounded-sm"
          aria-label="Nala AI, kembali ke atas"
        >
          <NalaLogo
            markClassName={cn("transition-all duration-300 ease-out", scrolled ? "size-7" : "size-8")}
            wordmarkClassName={cn(
              "transition-all duration-300 ease-out",
              scrolled ? "h-[18px]" : "h-5",
            )}
          />
        </a>

        {/* Links sit with the CTA on the right rather than centred. */}
        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          <nav aria-label="Menu utama" className="flex items-center gap-1">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-sm px-3.5 py-2 text-small font-medium text-ink-600 transition-[color,background-color] duration-200 ease-out hover:bg-brand-500 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button variant="outlined" size="sm" className="ml-4" render={<a href={nav.cta.href} />}>
            <WhatsappIcon />
            {nav.cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="flex size-10 items-center justify-center rounded-sm border border-line bg-white text-ink-900 transition-[color,background-color,border-color] duration-200 ease-out hover:border-brand-500 hover:bg-brand-500 hover:text-white lg:hidden"
        >
          {open ? (
            <X className="size-5" strokeWidth={1.75} />
          ) : (
            <Menu className="size-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/*
       * Mobile sheet — a matching floating card beneath the bar, positioned as
       * an overlay rather than in flow. In flow it grew the sticky header's box,
       * and because a sticky element still occupies its normal space, opening
       * the menu shoved the whole page down by the height of the sheet. The
       * insets mirror the header's own px-4 / sm:px-6 so the card lines up with
       * the bar above it.
       */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-4 mx-auto mt-2 max-w-frame rounded-lg border border-line bg-white p-3 shadow-card sm:inset-x-6 lg:hidden"
      >
        <nav aria-label="Menu utama (mobile)" className="flex flex-col gap-1">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-3 py-3 text-body font-medium text-ink-900 transition-[color,background-color] duration-200 ease-out hover:bg-brand-500 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          size="block"
          className="mt-2"
          render={<a href={nav.cta.href} onClick={() => setOpen(false)} />}
        >
          <WhatsappIcon />
          {nav.cta.label}
        </Button>
      </div>
    </header>
  );
}
