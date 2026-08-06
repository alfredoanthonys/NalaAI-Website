"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { WhatsappMockup } from "@/components/mockups/whatsapp-mockup";
import { WhatsappIcon } from "@/components/site/whatsapp-icon";
import { Container } from "@/components/primitives/section";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/home";

/**
 * DESIGN_SYSTEM §5.2 — the hero gradient panel is the one bold gesture on the
 * page. It sits inset with white margin around it, never edge to edge.
 *
 * The product mockups live *inside* the panel and run off its bottom edge,
 * cropped by the panel's own overflow, so the blue frames them rather than
 * being interrupted by them.
 *
 * §6 — page load is one orchestrated moment: eyebrow → headline → subtext →
 * CTAs → mockups, 60ms stagger, 300ms ease-out each, 8–12px rise.
 */
const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

export function Hero() {
  return (
    // The bottom inset matches the side ones so the card is evenly floated —
    // needed now that the grid frame's opening rule sits directly beneath it.
    // Flush, the hairline would run into the card's bottom corners.
    <section id="top" className="px-4 pt-3 pb-4 sm:px-6 sm:pb-6">
      <div className="hero-gradient relative overflow-hidden rounded-lg">
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Container className="max-w-[1060px] px-6 pt-16 pb-12 text-center md:pt-24 md:pb-14">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-3 py-1.5 text-small font-medium text-white backdrop-blur-sm">
                <Sparkles className="size-3.5" strokeWidth={1.75} />
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-hero leading-[1.6] font-semibold text-balance text-white"
            >
              {hero.headline.before} {hero.headline.highlight}
              {hero.headline.after}
            </motion.h1>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-[34rem] text-body text-white/85"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="onDark" size="lg" render={<a href={hero.primaryCta.href} />}>
                <WhatsappIcon />
                {hero.primaryCta.label}
              </Button>
              <Button variant="ghost" size="lg" render={<a href={hero.secondaryCta.href} />}>
                {hero.secondaryCta.label}
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Button>
            </motion.div>

            <motion.p variants={item} className="mt-5 text-small text-white/90">
              {hero.note}
            </motion.p>
          </Container>

          {/*
           * Fixed height, taller content: the mockups overflow this box and the
           * panel clips them at its bottom edge.
           */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
            }}
            className="mx-auto h-[250px] w-full max-w-[1240px] px-4 sm:h-[260px] sm:px-8 lg:h-[358px]"
          >
            {/*
             * Phones get the WhatsApp thread instead of the dashboard. A 800px
             * analytics panel scaled into a 360px viewport is unreadable, and
             * the chat is the thing a buyer on a phone recognises anyway. From
             * sm the dashboard takes over, and at lg both sit side by side.
             */}
            <div className="flex items-start justify-center gap-5">
              <DashboardMockup className="hidden w-full sm:block lg:max-w-[800px]" />
              <WhatsappMockup className="w-[320px] max-w-full shrink-0 translate-y-2 sm:hidden lg:block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
