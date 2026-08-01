import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/primitives/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/home";

/**
 * Two-column: heading and a route to sales on the left, the accordion on the
 * right. Another break from the grid rhythm (§8).
 */
export function Faq() {
  return (
    <Section id="faq" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal>
          {/* Not sticky. Pinning the heading meant it tracked down the viewport
              while the accordion scrolled past it, which reads as a bug rather
              than as a feature — and it is the only element on the page that
              moved independently of the rest. */}
          <div>
            <h2 className="font-display text-h1 font-semibold text-ink-900">{faq.heading}</h2>
            <p className="mt-4 text-body text-ink-600">{faq.subheading}</p>

            <a
              href={faq.contactCta.href}
              className="mt-6 inline-flex items-center gap-2 text-small font-medium text-brand-500 transition-[color] duration-200 hover:text-brand-600"
            >
              {faq.contactCta.label}
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Accordion multiple={false} className="border-t border-line">
            {faq.items.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-b border-line not-last:border-b"
              >
                <AccordionTrigger className="py-5 text-body font-medium text-ink-900 hover:no-underline **:data-[slot=accordion-trigger-icon]:mt-0.5 **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-ink-400">
                  <span className="pr-6">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-5 text-body text-ink-600">
                  <p className="max-w-prose pr-6">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
