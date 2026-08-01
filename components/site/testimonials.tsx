import Image from "next/image";
import { Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading, SectionRule } from "@/components/primitives/section";
import { testimonials } from "@/content/home";

/**
 * A horizontal rail rather than a bento: six quotes of roughly equal weight have
 * no natural hierarchy, and forcing one into a hero slot would imply a ranking
 * the content does not have. Scrolling also lets the row grow past six without
 * the layout having to be redrawn.
 *
 * No eyebrow pill — "Why Nala AI?" already names the section (§8).
 */
export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <Reveal>
        <SectionHeading heading={testimonials.heading} subheading={testimonials.subheading} />
      </Reveal>

      <SectionRule />

      <Reveal>
        {/*
         * tabIndex + role make the rail reachable without a pointer: a scroll
         * container that only responds to trackpad gestures strands keyboard
         * users on the first three cards.
         *
         * -mx-6 px-6 pushes the scroll port out to the container's true edge so
         * cards disappear exactly under the page's grid rails rather than 24px
         * short of them; scroll-pl-6 keeps snapping aligned to that padding.
         * At 316px wide a fourth card is left part-visible there, which is the
         * only affordance that reads as "this scrolls" on a platform with
         * overlay scrollbars.
         */}
        <div
          role="region"
          aria-label="Testimoni pelanggan"
          tabIndex={0}
          className="scroll-rail -mx-6 mt-14 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto scroll-pl-6 px-6 pb-5"
        >
          {testimonials.quotes.map((item) => (
            <article
              key={item.company}
              className="flex w-[316px] shrink-0 snap-start flex-col rounded-lg border border-line bg-white p-6"
            >
              <span className="inline-flex w-fit items-center overflow-hidden rounded-sm border border-line bg-surface-50">
                <span className="inline-flex items-center gap-1.5 py-1 pr-2.5 pl-2 text-[11px] font-semibold tracking-[0.06em] text-ink-900 uppercase tabular">
                  <Sparkles className="size-3 text-brand-500" strokeWidth={2} />
                  {item.months} bulan
                </span>
                <span className="border-l border-line px-2.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-ink-400 uppercase">
                  Aktif
                </span>
              </span>

              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={`/testimonials/${item.avatar}.jpg`}
                  alt=""
                  aria-hidden="true"
                  width={96}
                  height={96}
                  className="size-11 shrink-0 rounded-full object-cover"
                />
                <span className="text-small">
                  <span className="block font-semibold text-ink-900">{item.author}</span>
                  {/* The company carries the attribution now that the logo plate
                      is gone — without it a quote is anonymous praise. */}
                  <span className="block text-ink-600">
                    {item.role} · {item.company}
                  </span>
                </span>
              </div>

              <blockquote className="mt-5 text-body text-ink-900">{item.quote}</blockquote>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
