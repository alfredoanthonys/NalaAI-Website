import { ChatMockup } from "@/components/mockups/chat-mockup";
import {
  InsightVisual,
  ResolutionVisual,
  RoutingVisual,
  SourcesVisual,
} from "@/components/mockups/feature-visuals";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/primitives/section";
import { features } from "@/content/home";
import { cn } from "@/lib/utils";

const VISUALS = {
  chat: ChatMockup,
  sources: SourcesVisual,
  resolution: ResolutionVisual,
  routing: RoutingVisual,
  insight: InsightVisual,
} as const;

/**
 * DESIGN_SYSTEM §5.4/§5.5 — one capability per full-width row, copy and mockup
 * alternating sides. A three-card grid could not carry copy at this length, and
 * the alternation gives the eye a reason to keep going down five rows.
 *
 * The row and column hairlines are the same weight as the page's grid rails and
 * meet them exactly, so the whole block reads as cells of one drafting grid
 * rather than as a stack of separate panels. That is why the container drops its
 * gutter here (`px-0`) and each cell pads itself instead — the lines have to
 * reach the rails to land.
 *
 * No eyebrow pill: this is the only capability section on the page now, so
 * there is nothing to distinguish it from, and the heading says it plainly (§8).
 */
export function FeaturesSection() {
  return (
    // pb-0: the rows already close on a hairline, so the section's own bottom
    // padding just opened a white band between that rule and the next section's
    // opening rule. The grid now butts straight up against what follows.
    <Section id="features" className="bg-white pb-0 md:pb-0" containerClassName="px-0">
      <Reveal>
        <SectionHeading className="px-6" heading={features.heading} subheading={features.subheading} />
      </Reveal>

      {/* Matches SectionRule's gap exactly — here the rule doubles as the grid's
          own top edge, so the rows attach straight to it instead of it being a
          separate element. */}
      <div className="mt-10 border-t border-line md:mt-16">
        {features.items.map((feature, index) => {
          const Visual = VISUALS[feature.mockup];
          // Odd rows put the mockup on the left. Order is flipped at md only —
          // stacked, the copy always leads so the row still reads top-to-bottom.
          const reversed = index % 2 === 1;
          // The last row goes without its own bottom rule: the next section
          // draws one on its own top edge, and stacked the two read as a 2px
          // line rather than as the grid's closing hairline.
          const last = index === features.items.length - 1;

          return (
            <Reveal key={feature.title}>
              <div
                className={cn(
                  "relative grid md:grid-cols-2",
                  !last && "border-b border-line",
                )}
              >
                {/* Centre rule drawn rather than bordered on a cell: the cells
                    swap sides row to row, and a positioned line stays put. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-line md:block"
                />

                {/* min-w-0 on both cells: a grid item's default min-width is
                    auto, so one mockup a pixel wider than its track widened the
                    whole row past the viewport and put a hairline of horizontal
                    scroll on 375px phones. */}
                {/* Centred, not ragged-left against the cell edge: the mockup
                    opposite is centred in its half, and a left-aligned column
                    facing it left the row visibly lopsided. */}
                <div
                  className={cn(
                    "flex min-w-0 flex-col items-center justify-center px-6 py-12 text-center lg:px-12 lg:py-16",
                    reversed && "md:order-2",
                  )}
                >
                  <h3 className="max-w-md font-display text-h2 font-semibold text-balance text-ink-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-md text-body text-ink-600">{feature.body}</p>

                  {/* The capability chip is the scannable half of the row: a
                      reader skimming for "does it do X" reads these, not the
                      paragraph above them. */}
                  <span className="mt-6 inline-flex w-fit items-center rounded-sm bg-brand-300/12 px-3.5 py-2 text-small font-semibold text-brand-600">
                    {feature.capabilities}
                  </span>
                </div>

                <div
                  className={cn(
                    "relative flex min-w-0 items-center justify-center bg-surface-50/60 px-6 py-12 lg:px-12",
                    reversed && "md:order-1",
                  )}
                >
                  <div className="panel-glow" aria-hidden="true" />
                  {/* Capped rather than full-bleed: these mockups are drawn at a
                      fixed small type size, and stretched to a 600px cell their
                      11px labels would look scaled up rather than designed. */}
                  <Visual className="relative w-full max-w-[420px]" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
