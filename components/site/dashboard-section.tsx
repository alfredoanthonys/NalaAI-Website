import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/primitives/section";
import { dashboard } from "@/content/home";

/**
 * The mirror of the about section: heading and product on the right, argument
 * running down the left. Two consecutive sections in the same arrangement would
 * read as a template; flipped, they read as a pair.
 *
 * Order is set with `lg:order-*` rather than by writing the columns backwards,
 * so that stacked on mobile the heading still comes first and the section reads
 * top to bottom like every other one.
 */
export function DashboardSection() {
  return (
    <Section id="dashboard" className="bg-white">
      {/* items-center: the right column carries a heading, a paragraph and a
          mockup, so it is far the taller of the two. Left aligned to the top,
          the four points sat against the heading with a long empty run beneath
          them; centred, the two columns read as one row. */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* The order class must sit on <Reveal> itself: Reveal renders the grid
            item, so an order on a div inside it does nothing. */}
        <Reveal className="lg:order-2">
          <div>
            <h2 className="font-display text-h1 font-semibold text-balance text-ink-900">
              {dashboard.heading}
            </h2>
            <p className="mt-4 text-body text-ink-600">{dashboard.subheading}</p>

            <div className="relative mt-8">
              <div className="panel-glow" aria-hidden="true" />
              <DashboardMockup className="relative w-full" />
            </div>
          </div>
        </Reveal>

        <div className="lg:order-1">
          {/* Mirrors the about section's right column: a statement at h3 over a
              ruled list. It also states the problem the four points below answer,
              which the right column's copy does not — that one describes the
              product, this one says why anyone needs it. */}
          <Reveal>
            <p className="font-display text-h3 leading-relaxed font-medium text-ink-900">
              {dashboard.lead}
            </p>
          </Reveal>

          <RevealGroup className="mt-10 border-t border-line" as="ul" stagger={0.08}>
            {dashboard.points.map((point) => (
              <RevealItem as="li" key={point.title} className="border-b border-line py-6">
                <h3 className="text-body font-semibold text-ink-900">{point.title}</h3>
                <p className="mt-2 text-body text-ink-600">{point.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
