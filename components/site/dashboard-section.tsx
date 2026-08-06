import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/primitives/section";
import { dashboard } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * The same stacked arrangement as the about section — heading, product at full
 * width, then short ruled columns. The two run back to back deliberately: one
 * shows the thread the buyer sees, the other the dashboard the owner sees, and
 * holding the layout still is what makes them read as two halves of one answer.
 *
 * Four columns rather than the about section's three, because the dashboard has
 * four things worth naming and dropping one to make the rows match would be
 * letting the layout edit the argument.
 */
export function DashboardSection() {
  return (
    <Section id="dashboard" className="bg-white">
      <Reveal>
        <div className="max-w-3xl">
          <h2 className="font-display text-h1 font-semibold text-balance text-ink-900">
            {dashboard.heading}
          </h2>
          <p className="mt-4 text-body text-ink-600">{dashboard.subheading}</p>
        </div>
      </Reveal>

      {/* Same box as the about section's thread — width and height both — so the
          two product shots read as one pair rather than as two odd sizes. Keep
          these two in step if either changes. */}
      <Reveal delay={0.06}>
        <div className="relative mx-auto mt-10 h-[430px] w-full max-w-5xl sm:h-[490px] lg:h-[560px]">
          <div className="panel-glow" aria-hidden="true" />
          <DashboardMockup className="relative h-full w-full" />
        </div>
      </Reveal>

      <RevealGroup
        className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        as="ul"
        stagger={0.08}
      >
        {dashboard.points.map((point, index) => (
          <RevealItem
            as="li"
            key={point.title}
            className={cn(
              "lg:px-8",
              index === 0 ? "lg:pl-0" : "lg:border-l lg:border-line",
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
