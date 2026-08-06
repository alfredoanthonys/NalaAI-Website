import { WhatsappDesktopMockup } from "@/components/mockups/whatsapp-mockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/primitives/section";
import { about } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Stacked rather than columned: a left-aligned heading and one-line claim, the
 * product at full width beneath it, then the argument broken into short ruled
 * columns along the bottom.
 *
 * The mockup earns the full width — it is a WhatsApp thread, and at half width
 * the message text was too small to actually read, which made it decoration
 * rather than evidence. The columns underneath are captions to it, so they are
 * kept to a line or two each; anything longer and the reader stops scanning and
 * starts reading, which is not what a row of three is for.
 *
 * No SectionRule here: the rule exists to close a *centred* heading band, and
 * this heading is left-aligned and runs straight into the product. Same reason
 * the FAQ goes without one.
 */
export function AboutSection() {
  return (
    <Section id="about" className="bg-surface-50">
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-h1 font-semibold text-balance text-ink-900">
            {about.heading}
          </h2>
          <p className="mt-4 text-body text-ink-600">{about.subheading}</p>
        </div>
      </Reveal>

      {/* Capped and centred rather than run to the frame's full 1600px. The
          mockup is drawn at ~11px type; stretched past ~1000px it letterboxes
          into a strip too wide to read, which is the opposite of the point.
          The height is stated here, and the dashboard section states the same
          one, so the two product shots are identical boxes down the page. */}
      <Reveal delay={0.06}>
        <div className="relative mx-auto mt-10 h-[430px] w-full max-w-5xl sm:h-[490px] lg:h-[560px]">
          <div className="panel-glow" aria-hidden="true" />
          <WhatsappDesktopMockup className="relative h-full w-full" />
        </div>
      </Reveal>

      {/* Hairline above the row and between the columns, matching the page's
          grid language. The dividers are lg-only: stacked, a left border on a
          full-width block reads as a quote bar rather than as a column edge. */}
      <RevealGroup
        className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0"
        as="ul"
        stagger={0.08}
      >
        {about.principles.map((principle, index) => (
          <RevealItem
            as="li"
            key={principle.title}
            className={cn(
              "lg:px-8",
              index === 0 ? "lg:pl-0" : "lg:border-l lg:border-line",
            )}
          >
            <h3 className="text-body font-semibold text-ink-900">{principle.title}</h3>
            <p className="mt-2 text-body text-ink-600">{principle.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
