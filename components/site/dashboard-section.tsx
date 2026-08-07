import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/primitives/section";
import { dashboard } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * The conclusion to the feature rows, so it gets a section rather than a sixth
 * row in them. The rows above answer "can it do X" one at a time; this answers
 * "and where does all of that land", which is a summary — it needs the heading
 * to land first and the product shown at full size, not a 420px thumbnail
 * sharing a row with a paragraph.
 *
 * Deliberately shaped as the about section's twin: heading band, then the
 * product run full-bleed so its edges land on the grid rails, then short ruled
 * columns captioning it. One shows the thread the buyer sees, the other the
 * dashboard the owner sees, and holding the layout still across the two is what
 * makes them read as two halves of one answer. Keep them in step if either
 * changes.
 *
 * Four columns here against the about section's three, because the dashboard
 * has four things worth naming and dropping one to make the rows match would be
 * letting the layout edit the argument.
 */
export function DashboardSection() {
  return (
    <Section id="dashboard" className="bg-surface-50" containerClassName="px-0">
      <Reveal>
        <SectionHeading
          className="px-6"
          heading={dashboard.heading}
          subheading={dashboard.subheading}
        />
      </Reveal>

      {/* No gutter, no radius, no shadow: the plate is the frame's full width so
          its own border sits exactly on the rails. The card treatment stays on
          the hero's copy of this mockup, where it really is a floating card.

          Height is stated from sm up only, and matches the about section's
          thread exactly so the two plates are the same box down the page. Keep
          them in step. On a phone the rail is hidden and the tiles stack two-up,
          so a fixed height had the two lower cards fighting over ~120px and
          overlapping each other; left to size itself the mockup just gets
          taller, which is what a real dashboard does on a phone. */}
      <Reveal delay={0.06}>
        <div className="mt-10 md:mt-16">
          <DashboardMockup className="w-full rounded-none shadow-none sm:h-[600px] lg:h-[700px]" />
        </div>
      </Reveal>

      {/* Attached straight to the plate, not floated below it: the mockup's own
          bottom border is the rule that closes it, so a margin here just opened
          a dead band between the product and its caption. */}
      {/* No stagger. These sit as one row on a shared baseline, and revealing
          them 80ms apart meant that for half a second on the way in the first
          column had landed while the rest were still 12px low — which reads as
          the first column having lost its top padding. A cascade is worth that
          on a list you scan down; on four headings you read across, it is not. */}
      <RevealGroup
        className="grid gap-8 px-6 pt-10 sm:grid-cols-2 md:pt-16 lg:grid-cols-4 lg:gap-0"
        as="ul"
        stagger={0}
      >
        {dashboard.points.map((point, index) => (
          <RevealItem
            as="li"
            key={point.title}
            className={cn(
              // Even padding on every cell, first and last included. Zeroing the
              // first column's left pad aligned its text to the container gutter
              // but left the row lopsided — nothing at the left edge, 32px held
              // back at the right. Half of 32 on every side splits the
              // difference: the two outer edges now match, and the gap between
              // one column's text and the next is still 32px across the rule.
              "lg:px-4",
              index > 0 && "lg:border-l lg:border-line",
              // Stacked and two-up there are no column edges to separate these,
              // and four unruled blocks ran together into one wall of text. A
              // rule goes above any item that starts a new row: below sm every
              // item does, at sm the third onward, at lg none of them.
              //
              // max-* rather than a base rule reset at the wider breakpoints —
              // see the about section for why the subtractive form is a trap.
              // Keep the two in step.
              index === 1 && "max-sm:border-t max-sm:border-line max-sm:pt-8",
              index >= 2 && "max-lg:border-t max-lg:border-line max-lg:pt-8",
            )}
          >
            <h3 className="text-body font-semibold text-ink-900">{point.title}</h3>
            <p className="mt-2 text-body text-ink-600">{point.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
