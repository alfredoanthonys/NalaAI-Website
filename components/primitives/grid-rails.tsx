import { cn } from "@/lib/utils";

/**
 * Wraps a run of light sections in the same drafting-grid frame the hero uses:
 * two hairline rails at the container's outer edge (`--container-frame`), a full-bleed rule
 * closing the run top and bottom, and a rule between each pair of sections.
 *
 * The rails sit exactly on the container boundary, so the 24px gutter keeps all
 * copy clear of them — nothing ever crowds a line. The between-section rules are
 * applied by selector rather than by hand so the pattern survives a reorder.
 *
 * The run is deliberate: the inset gradient panels at either end break the
 * frame, which is what gives the page its rhythm (§8). Carrying the rails across
 * a dark panel would read as a seam, not as structure.
 */
export function GridRails({
  children,
  className,
  edges = "both",
}: {
  children: React.ReactNode;
  className?: string;
  /**
   * Which ends of the run get a full-bleed closing rule. Skip the end that
   * butts against the dark band — a hairline laid on that edge reads as a
   * seam rather than a divider.
   */
  edges?: "both" | "top" | "bottom" | "none";
}) {
  return (
    <div
      className={cn(
        "relative border-line [&>section+section]:border-t [&>section+section]:border-line",
        edges === "both" && "border-y",
        edges === "top" && "border-t",
        edges === "bottom" && "border-b",
        className,
      )}
    >
      {/*
       * Above the section backgrounds (z-10) so an opaque bg-white or
       * bg-surface-50 does not paint over them, but well under the sticky nav.
       * Shown from lg up, which is exactly where the frame starts holding 4% of
       * the viewport back on each side (globals.css). Below that the container
       * runs full width and a rail would land on the window edge, reading as a
       * stray page border rather than as a grid.
       */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block" aria-hidden="true">
        <div className="relative mx-auto h-full w-full max-w-frame">
          <span className="absolute inset-y-0 left-0 w-px bg-line" />
          <span className="absolute inset-y-0 right-0 w-px bg-line" />
        </div>
      </div>

      {children}
    </div>
  );
}
