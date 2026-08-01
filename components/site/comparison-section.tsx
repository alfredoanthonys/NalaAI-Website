import { Check, X } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section, SectionRule } from "@/components/primitives/section";
import { NalaMark } from "@/components/site/logo";
import { WhatsappIcon } from "@/components/site/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { comparison } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * A two-column before/after rather than a card grid, so the section states the
 * problem and the answer in one read. No eyebrow pill here — the heading says
 * plainly what the comparison is, and dropping it also gives this section a
 * different rhythm from the ones below it (§8).
 *
 * The red only ever appears as a small status mark, mirroring how the sanctioned
 * success green is used; type and surfaces stay on the blue-and-ink palette.
 */
export function ComparisonSection() {
  const { before, after } = comparison;

  return (
    <Section id="problem" className="bg-white">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-h1 font-semibold text-balance text-ink-900">
            {comparison.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body text-ink-600">{comparison.subheading}</p>
        </div>
      </Reveal>

      <SectionRule />

      {/* Stretch, not items-start: the two columns read as a pair, so they should
          share a baseline top and bottom even though their copy differs. */}
      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" as="ul" stagger={0.08}>
        <RevealItem as="li">
          <Column
            label={before.label}
            title={before.title}
            items={before.items}
            tone="before"
          />
        </RevealItem>

        <RevealItem as="li">
          <Column label={after.label} title={after.title} items={after.items} tone="after" />
        </RevealItem>
      </RevealGroup>

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
          <Button size="lg" render={<a href={comparison.primaryCta.href} />}>
            <WhatsappIcon />
            {comparison.primaryCta.label}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

function Column({
  label,
  title,
  items,
  tone,
}: {
  label: string;
  title: string;
  items: readonly string[];
  tone: "before" | "after";
}) {
  const isAfter = tone === "after";
  const Icon = isAfter ? Check : X;

  return (
    <div
      className={cn(
        "relative h-full rounded-lg p-7 sm:p-9",
        isAfter
          ? "border-2 border-brand-500/35 bg-brand-300/[0.06]"
          : "border border-line bg-surface-50",
      )}
    >
      {/*
       * The mark is anchored to the corner rather than sitting in the flow, so
       * the eyebrow and heading keep the same start position as the "old way"
       * column. Only the heading needs to yield space for it (pr-16 below).
       */}
      {isAfter ? (
        <span className="absolute top-6 right-6 grid size-11 place-items-center rounded-md border border-brand-500/20 bg-white shadow-card sm:top-7 sm:right-7">
          <NalaMark className="size-7" />
        </span>
      ) : null}

      <p
        className={cn(
          "text-[13px] font-semibold tracking-[0.08em] uppercase",
          isAfter ? "text-brand-600" : "text-ink-400",
        )}
      >
        {label}
      </p>

      <h3
        className={cn(
          "mt-3 font-display text-h3 font-semibold text-ink-900",
          isAfter && "pr-16",
        )}
      >
        {title}
      </h3>

      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3.5">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                isAfter ? "bg-brand-500/12" : "bg-danger/10",
              )}
            >
              <Icon
                className={cn("size-3", isAfter ? "text-brand-500" : "text-danger")}
                strokeWidth={3}
              />
            </span>
            {/*
             * The "old way" column reads quieter than the "new way" one, but it
             * still sits at --color-ink-600: §7 puts a hard floor there, so the
             * contrast is carried by weight and colour, never by fading text out.
             */}
            <span className={cn("text-body", isAfter ? "text-ink-900" : "text-ink-600")}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
