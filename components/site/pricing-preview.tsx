"use client";

import { useState } from "react";
import { Building2, Check, Sparkle, Zap } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionHeading, SectionRule } from "@/components/primitives/section";
import { Button } from "@/components/ui/button";
import { billingCycleLabels, pricing, type BillingCycle } from "@/content/home";
import { cn } from "@/lib/utils";

const ICONS = { Sparkle, Zap, Building2 } as const;

/** Indonesian thousands grouping: 1499000 renders as "1.499.000". */
const rupiah = new Intl.NumberFormat("id-ID");

/**
 * DESIGN_SYSTEM §5.9 — three white cards on a pill billing toggle. The featured
 * plan gets a 2px brand border and a "Most popular" pill and nothing else:
 * everything structural stays identical so it reads as the same template.
 */
export function PricingPreview() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <Section id="pricing" className="bg-surface-50">
      <Reveal>
        <SectionHeading heading={pricing.heading} subheading={pricing.subheading} />
      </Reveal>

      <SectionRule />

      <Reveal delay={0.06}>
        <div className="mt-12 flex flex-col items-center gap-3">
          <div
            role="radiogroup"
            aria-label="Periode pembayaran"
            className="inline-flex rounded-sm border border-line bg-white p-1"
          >
            {(["monthly", "annual"] as const).map((option) => (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={cycle === option}
                onClick={() => setCycle(option)}
                className={cn(
                  "rounded-sm px-4 py-2 text-small font-medium transition-[color] duration-200",
                  cycle === option
                    ? "bg-brand-500 text-white"
                    : "text-ink-600 hover:text-ink-900",
                )}
              >
                {billingCycleLabels[option]}
              </button>
            ))}
          </div>

          <p
            className={cn(
              "text-small transition-[color] duration-200",
              cycle === "annual" ? "text-brand-600" : "text-ink-400",
            )}
          >
            {pricing.annualNote}
          </p>
        </div>
      </Reveal>

      <RevealGroup className="mt-12 grid items-start gap-5 lg:grid-cols-3" as="ul">
        {pricing.plans.map((plan) => {
          const Icon = ICONS[plan.icon];
          const price = cycle === "monthly" ? plan.priceMonthly : plan.priceAnnual;

          return (
            <RevealItem as="li" key={plan.name}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-lg bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover",
                  plan.featured ? "border-2 border-brand-500" : "border border-line",
                )}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-7 rounded-sm bg-brand-500 px-2.5 py-1 text-[12px] font-medium text-white">
                    {pricing.featuredBadge}
                  </span>
                ) : null}

                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-sm bg-brand-300/12">
                    <Icon className="size-4 text-brand-500" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-h3 font-semibold text-ink-900">{plan.name}</h3>
                </div>

                <p className="mt-4 text-small text-ink-600">{plan.description}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-h1 font-semibold text-ink-900 tabular">
                    Rp {rupiah.format(price)}
                  </span>
                  <span className="text-small text-ink-400">{pricing.perMonth}</span>
                </p>
                <p className="mt-1 text-[13px] text-ink-400">
                  {cycle === "annual" ? pricing.billedAnnually : pricing.billedMonthly}
                </p>

                <Button
                  size="block"
                  variant={plan.featured ? "default" : "secondary"}
                  className="mt-6"
                  render={<a href="#consultation" />}
                >
                  {plan.cta}
                </Button>

                <p className="mt-7 text-[13px] font-semibold text-ink-900">{plan.featuresLabel}</p>
                <ul className="mt-3.5 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-brand-500/10">
                        <Check className="size-2.5 text-brand-500" strokeWidth={3} />
                      </span>
                      <span className="text-small text-ink-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
