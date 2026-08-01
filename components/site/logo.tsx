import Image from "next/image";

import mark from "@/public/nala-mark.png";
import wordmark from "@/public/nala-wordmark.png";
import { cn } from "@/lib/utils";

/**
 * The brand mark on its own. Supplied artwork had an opaque white background;
 * the exterior was flood-filled to transparent so the mark sits cleanly on the
 * gradient panels as well as on white.
 */
export function NalaMark({ className }: { className?: string }) {
  return (
    <Image
      src={mark}
      alt=""
      aria-hidden="true"
      className={cn("size-8 object-contain", className)}
      priority
    />
  );
}

/**
 * Mark + wordmark lockup. The wordmark's navy letterforms only read on light
 * surfaces, so this belongs on white/surface-50 — never on the gradient.
 */
export function NalaLogo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <NalaMark className={markClassName} />
      <Image
        src={wordmark}
        alt="Nala AI"
        className={cn("h-5 w-auto object-contain", wordmarkClassName)}
        priority
      />
    </span>
  );
}
