"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NalaLogo } from "@/components/site/logo";
import { WhatsappIcon } from "@/components/site/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Sticky navigation, one appearance the whole way down: edge to edge, full
 * height, no chrome. It used to contract into a narrower floating card once the
 * page scrolled, which meant the logo and the bar resized under the reader
 * while they were reading.
 *
 * The background is opaque white rather than transparent, and that is the part
 * that has to stay. The bar is only unobtrusive at the very top because the page
 * behind it is white too; everything it passes over further down — the gradient
 * hero panel, the mockups, the tinted sections — would otherwise scroll straight
 * through the links.
 *
 * The closing hairline is `--color-line`, the same weight and colour as the grid
 * rails, so the bar reads as the top edge of the same drafting grid rather than
 * as a separate floating strip. It is the one thing here that answers to scroll:
 * at rest the bar sits on the same white as the page and has no edge to justify,
 * so the rule would just be a line drawn across the top of an empty page. It
 * fades in as soon as there is content passing underneath for it to separate.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Only the hairline answers to this — the bar's height, width and logo are
    // fixed. It deliberately does NOT close the mobile sheet: opening the sheet
    // fires a scroll event on some mobile browsers, so closing here made the
    // menu shut the instant it was tapped below the top of the page.
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

  // The border is always drawn and only changes colour. Toggling `border-b`
  // itself would add and remove a pixel of height under a sticky element, so the
  // whole page would twitch up and down on the first scroll.
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-surface-0 px-4 transition-colors duration-200 ease-out sm:px-6",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-[88px] max-w-frame items-center justify-between gap-6">
        <a
          href="#top"
          className="flex shrink-0 items-center rounded-sm"
          aria-label="Nala AI, kembali ke atas"
        >
          <NalaLogo markClassName="size-8" wordmarkClassName="h-5" />
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

          {/* Plain primary, not the `outlined` variant: that one draws a white
              gap ring and a hairline edge outside the button, which read as a
              stray outline around the CTA rather than as part of it.
              `lg` to match the closing CTA band — the two are the same action,
              so they are the same button. */}
          <Button size="lg" className="ml-4" render={<a href={nav.cta.href} />}>
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
