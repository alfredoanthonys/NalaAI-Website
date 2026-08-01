import Image from "next/image";

import { NalaMark } from "@/components/site/logo";
import { Container } from "@/components/primitives/section";
import { footer } from "@/content/home";
import wordmark from "@/public/nala-wordmark.png";

/**
 * Painted the same deep blue as the closing panel above it, with no border
 * between them. The panel is rounded at the top and square at the bottom, so the
 * two read as one surface that the page settles into rather than as a card
 * sitting on a separate footer.
 *
 * `--color-brand-900` flat rather than the gradient: two gradients stacked would
 * meet at a visible seam wherever their light corners failed to line up.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] md:gap-8">
          <div>
            {/* The wordmark's navy letterforms disappear on this surface, so the
                lockup is rebuilt here with the mark beside white type rather
                than reusing <NalaLogo>. */}
            <span className="flex items-center gap-2.5">
              <NalaMark className="size-8" />
              <Image
                src={wordmark}
                alt="Nala AI"
                className="h-5 w-auto object-contain brightness-0 invert"
              />
            </span>
            <p className="mt-4 max-w-xs text-small text-white/70">{footer.blurb}</p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-small font-semibold text-white">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-small text-white/70 transition-[color] duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/12 pt-6 sm:flex-row sm:items-center">
          <p className="text-small text-white/50">© {year} Nala AI. Seluruh hak cipta dilindungi.</p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-small text-white/50 transition-[color] duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
