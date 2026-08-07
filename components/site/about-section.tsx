import { WhatsappDesktopMockup } from "@/components/mockups/whatsapp-mockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/section";
import { about } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * The section opens on the product itself — no heading, no standfirst, no
 * gutter. A WhatsApp thread showing Nala answering a real question is a better
 * opening line than a sentence claiming it does, and putting a heading over it
 * only asked the reader to read the claim before seeing the evidence.
 *
 * So the mockup runs the full width of the frame: its edges land exactly on the
 * grid rails (both are drawn at `--container-frame`), and it butts straight up
 * against the rule that opens the section. It is the one element on the page
 * that breaks the 24px gutter, which is what makes it read as a plate rather
 * than as another card.
 *
 * The three columns underneath are captions to it, so they are kept to a line or
 * two each; anything longer and the reader stops scanning and starts reading,
 * which is not what a row of three is for.
 */
export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface-50">
      {/* max-w-frame with no px, so the panel's own edges *are* the rails. The
          closing hairline is carried here rather than on the row below, so it
          spans the plate's full width instead of stopping short inside the
          gutter. */}
      <Reveal>
        <div className="mx-auto w-full max-w-frame border-b border-line">
          <WhatsappDesktopMockup className="w-full" />
        </div>
      </Reveal>

      {/* Vertical dividers are lg-only: stacked, a left border on a full-width
          block reads as a quote bar rather than as a column edge. Below lg the
          separation is carried by horizontal rules instead. */}
      <Container>
        {/* No stagger, for the reason given in the dashboard section: these read
            across as one row, and revealing them 80ms apart leaves the first
            column looking like it lost its top padding while the rest catch up. */}
        <RevealGroup
          className="grid gap-8 py-10 sm:grid-cols-2 md:py-16 lg:grid-cols-3 lg:gap-0"
          as="ul"
          stagger={0}
        >
          {about.principles.map((principle, index) => (
            <RevealItem
              as="li"
              key={principle.title}
              className={cn(
                // Even padding on every cell — see the dashboard section. The
                // two rows are meant to be the same box down the page, so the
                // outer insets have to match there too.
                "lg:px-4",
                index > 0 && "lg:border-l lg:border-line",
                // A rule above any item that starts a new row: below sm every
                // item does, at sm the third onward, at lg none of them. Without
                // it the stacked columns ran together into one wall of text.
                //
                // Stated as max-* rather than as a base rule undone by
                // `sm:pt-0`/`lg:pt-0` at the width it isn't wanted. Subtractive
                // is a trap here: the reset is what carries the desktop layout,
                // so the moment those two utilities are missing from the
                // stylesheet — a stale CSS chunk, a purge that didn't see them —
                // every column but the first drops 32px and grows a rule that
                // starts mid-row. Additive degrades to a missing hairline on a
                // phone instead, which is the failure worth having.
                index === 1 && "max-sm:border-t max-sm:border-line max-sm:pt-8",
                index >= 2 && "max-lg:border-t max-lg:border-line max-lg:pt-8",
              )}
            >
              <h3 className="text-body font-semibold text-ink-900">{principle.title}</h3>
              <p className="mt-2 text-body text-ink-600">{principle.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
