import { cn } from "@/lib/utils";

/**
 * DESIGN_SYSTEM §5.5 — small bar / line charts in brand blue inside the mockup
 * cards. Inline SVG, no chart library, decorative (aria-hidden) because the
 * surrounding card already carries the figures as text.
 */

export function BarChart({
  values,
  className,
  highlightLast = true,
}: {
  values: number[];
  className?: string;
  highlightLast?: boolean;
}) {
  const max = Math.max(...values);
  const gap = 4;
  const width = 100;
  const height = 40;
  const barWidth = (width - gap * (values.length - 1)) / values.length;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-10 w-full", className)}
      aria-hidden="true"
    >
      {values.map((value, index) => {
        const barHeight = Math.max((value / max) * height, 2);
        const isLast = index === values.length - 1;
        return (
          <rect
            key={index}
            x={index * (barWidth + gap)}
            y={height - barHeight}
            width={barWidth}
            height={barHeight}
            rx="1.5"
            className={
              highlightLast && isLast ? "fill-brand-500" : "fill-brand-500/22"
            }
          />
        );
      })}
    </svg>
  );
}

export function LineChart({
  values,
  className,
  showArea = true,
}: {
  values: number[];
  className?: string;
  showArea?: boolean;
}) {
  const width = 100;
  const height = 40;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;

  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / span) * (height - 6) - 3;
    return [x, y] as const;
  });

  // Catmull-Rom style smoothing so the line reads as a trend, not a zigzag.
  const path = points
    .map(([x, y], index) => {
      if (index === 0) return `M ${x} ${y}`;
      const [px, py] = points[index - 1];
      const cx = (px + x) / 2;
      return `C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`;
    })
    .join(" ");

  const gradientId = `line-fade-${values.join("-")}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={cn("h-10 w-full", className)}
      aria-hidden="true"
    >
      {showArea ? (
        <>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L ${width} ${height} L 0 ${height} Z`} fill={`url(#${gradientId})`} />
        </>
      ) : null}
      <path
        d={path}
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Thin horizontal progress meter used for the "resolved / escalated" split. */
export function Meter({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-sm bg-brand-500/12", className)}>
      <div className="h-full rounded-sm bg-brand-500" style={{ width: `${value}%` }} />
    </div>
  );
}
