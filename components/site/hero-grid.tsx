import { cn } from "@/lib/utils";

/**
 * The sparks that travel a grid. Positions are multiples of the 72px grid pitch
 * set in globals.css so each one rides an actual line rather than floating
 * between them.
 *
 * Deliberately few and on long, staggered durations: at any moment usually only
 * one or two are on screen. §6 keeps motion restrained, and a dense field of
 * moving dots is exactly the kind of thing that reads as uncomfortable.
 */
type Spark = { axis: "x" | "y"; offset: number; duration: string; delay: string };

const HERO_SPARKS: readonly Spark[] = [
  { axis: "x", offset: 144, duration: "17s", delay: "0s" },
  { axis: "x", offset: 288, duration: "21s", delay: "7s" },
  { axis: "x", offset: 576, duration: "15s", delay: "3.5s" },
  { axis: "x", offset: 720, duration: "24s", delay: "12s" },
  // Vertical travellers sit in the left and right bands: the centre column is
  // masked out in globals.css, so one placed mid-panel would never be seen.
  { axis: "y", offset: 216, duration: "19s", delay: "5s" },
  { axis: "y", offset: 864, duration: "26s", delay: "1.5s" },
  { axis: "y", offset: 1152, duration: "22s", delay: "10s" },
];

/**
 * The closing panel is a third of the hero's height, so the hero's offsets at
 * 576px and 720px would fall clean off the bottom. These sit inside it, and only
 * on the right: the panel's copy is left-aligned and a streak crossing behind a
 * headline is the one place this effect stops being subtle.
 */
const PANEL_SPARKS: readonly Spark[] = [
  { axis: "x", offset: 72, duration: "19s", delay: "2s" },
  { axis: "x", offset: 216, duration: "23s", delay: "9s" },
  { axis: "x", offset: 288, duration: "16s", delay: "5s" },
  { axis: "y", offset: 864, duration: "21s", delay: "0s" },
  { axis: "y", offset: 1080, duration: "27s", delay: "7s" },
];

export function HeroGrid({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "panel";
}) {
  const panel = variant === "panel";
  const sparks = panel ? PANEL_SPARKS : HERO_SPARKS;

  return (
    // Desktop only: the sparks sit on fixed grid offsets, and on the narrower
    // stacked layouts those offsets land on the CTAs rather than on open space.
    // The grid texture itself stays at every width.
    <div
      className={cn(
        "hero-sparks absolute inset-0 hidden overflow-hidden lg:block",
        panel && "hero-sparks--right",
        className,
      )}
      aria-hidden="true"
    >
      {sparks.map((spark, index) => (
        <span
          key={index}
          className={cn(
            "hero-spark",
            spark.axis === "x" ? "hero-spark-x" : "hero-spark-y",
          )}
          style={
            {
              [spark.axis === "x" ? "top" : "left"]: `${spark.offset - 1}px`,
              "--spark-duration": spark.duration,
              "--spark-delay": spark.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
