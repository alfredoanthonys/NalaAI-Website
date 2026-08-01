import { WhatsappDesktopMockup } from "@/components/mockups/whatsapp-mockup";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/primitives/section";
import { about } from "@/content/home";

/**
 * Heading held on the left while the argument runs down the right. The heading
 * stays in the reader's eye for the whole column, which suits a section that is
 * one continuous claim rather than a set of parallel items.
 *
 * No SectionRule here: the rule exists to close a centred heading *band*, and
 * there is no band when the heading sits beside its content. Same reason the FAQ
 * goes without one.
 */
export function AboutSection() {
  return (
    <Section id="about" className="bg-surface-50">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div>
            <h2 className="font-display text-h1 font-semibold text-balance text-ink-900">
              {about.heading}
            </h2>
            <p className="mt-4 text-body text-ink-600">{about.subheading}</p>

            {/*
             * The empty half-column under the heading was the argument for
             * putting the product here: this section claims Nala answers in the
             * buyer's own language and hands over cleanly, and the thread shows
             * both in about two seconds of looking. The skincare variant is used
             * rather than the hero's so the page never repeats a conversation.
             */}
            <div className="relative mt-8">
              <div className="panel-glow" aria-hidden="true" />
              <WhatsappDesktopMockup className="relative w-full" />
            </div>

            <p className="mt-4 text-small text-ink-400">{about.demoCaption}</p>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.06}>
            {/* The one paragraph on the site written about us rather than about
                the reader — set at h3 so it reads as a statement, not as body. */}
            <p className="font-display text-h3 leading-relaxed font-medium text-ink-900">
              {about.lead}
            </p>
          </Reveal>

          {/* Ruled rows rather than cards: the hairlines match the page's grid
              language, and three stacked cards here would restate the layout of
              the comparison section directly below. */}
          <RevealGroup
            className="mt-10 border-t border-line"
            as="ul"
            stagger={0.08}
          >
            {about.principles.map((principle) => (
              <RevealItem as="li" key={principle.title} className="border-b border-line py-6">
                <h3 className="text-body font-semibold text-ink-900">{principle.title}</h3>
                <p className="mt-2 text-body text-ink-600">{principle.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
