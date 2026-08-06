import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/section";
import { WhatsappIcon } from "@/components/site/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { closingCta } from "@/content/home";

/**
 * The closing ask, fused into the footer: the hero's gradient rounded at the top,
 * square at the bottom, and no padding beneath it, so the panel runs straight
 * into a footer painted the same deep blue. The page ends on one surface.
 *
 * The plain `.hero-gradient` rather than `--compact`: the compact variant lays a
 * *centred* radial scrim for centred copy, and this copy is left-aligned, where
 * the 135deg gradient is already at its darkest.
 */
export function CtaBand() {
  return (
    <section id="consultation" className="scroll-mt-24 px-4 pt-16 sm:px-6 md:pt-20">
      <Container className="px-0">
        <div className="hero-gradient overflow-hidden rounded-t-lg">
          <Reveal>
            <div className="relative px-6 py-12 sm:px-10 md:py-16 lg:px-14">
              <h2 className="max-w-2xl font-display text-h1 font-semibold text-balance text-white">
                {closingCta.heading}
              </h2>
              <p className="mt-4 max-w-xl text-body text-white/85">{closingCta.subtext}</p>

              <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
                {closingCta.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check className="size-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-body text-white">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <Button variant="onDark" size="lg" render={<a href={closingCta.primaryCta.href} />}>
                  <WhatsappIcon />
                  {closingCta.primaryCta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
