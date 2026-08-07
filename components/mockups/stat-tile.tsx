import { cn } from "@/lib/utils";

/**
 * DESIGN_SYSTEM §5.5 — a stat sub-card inside a dashboard mockup: label, big
 * number, small trend indicator. Figures use tabular numerals (§3).
 */
export function StatTile({
  label,
  value,
  delta,
  children,
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-md border border-line bg-white p-3 @4xl:p-4",
        className,
      )}
    >
      {/*
       * Label and trend share the top row; the number gets a row to itself
       * beneath them. Sitting the badge next to the value instead pushed it out
       * through the card's right edge, because "2,184" and "+18%" together are
       * wider than a tile ever is.
       */}
      <div className="flex items-start justify-between gap-1.5">
        <span className="min-w-0 text-[11px] leading-tight font-medium text-ink-400 @4xl:text-[13px]">
          {label}
        </span>
        {delta ? (
          <span className="shrink-0 rounded-sm bg-success/10 px-1 py-0.5 text-[10px] font-semibold text-success tabular @4xl:px-1.5 @4xl:text-[11.5px]">
            +{delta}
          </span>
        ) : null}
      </div>

      <span className="mt-2 block font-display text-xl leading-none font-semibold text-ink-900 tabular @4xl:mt-3 @4xl:text-3xl">
        {value}
      </span>

      {children ? <div className="mt-2.5">{children}</div> : null}
    </div>
  );
}
