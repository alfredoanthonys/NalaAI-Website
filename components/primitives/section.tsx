import { cn } from "@/lib/utils";

/**
 * DESIGN_SYSTEM §4 — 12-column grid, max content width 1200px, 24px gutters,
 * 96–120px vertical padding per full section on desktop, 56px on mobile.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-6", className)}>{children}</div>;
}

/**
 * 64px desktop, well under §4's 96–120px band. That band was written for sections
 * separated by whitespace alone; every section now opens and closes on a hairline,
 * so the rule does the separating the padding used to. Anything looser left the
 * heading floating in a field of white with nothing holding it.
 */
export function Section({
  children,
  className,
  id,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10 md:py-16", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/**
 * The hairline that closes every section's heading band. Negative margins pull
 * it back out through the container's 24px gutter so it spans the full 1200px
 * and meets the page's grid rails exactly — a rule stopping short of them would
 * read as a stray underline rather than as part of the same grid.
 *
 * Sections whose container already runs edge to edge (`containerClassName="px-0"`)
 * pass `className="mx-0"`.
 *
 * The gap above it deliberately equals Section's own vertical padding, so the
 * heading sits dead centre in the band between the section's opening line and
 * this one. Owning that value here rather than at each call site is what keeps
 * the five heading bands identical.
 */
export function SectionRule({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "-mx-6 mt-10 border-t md:mt-16",
        tone === "dark" ? "border-white/10" : "border-line",
        className,
      )}
    />
  );
}

/** The small pill label that sits above a section heading. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-brand-300/12 px-3 py-1 text-small font-medium text-brand-600",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Eyebrow + heading + optional subheading, centred. Used by most sections. */
export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display text-h1 font-semibold text-ink-900",
          eyebrow ? "mt-5" : undefined,
        )}
      >
        {heading}
      </h2>
      {subheading ? (
        <p className={cn("mt-4 text-body text-ink-600", align === "center" && "mx-auto max-w-xl")}>
          {subheading}
        </p>
      ) : null}
    </div>
  );
}
