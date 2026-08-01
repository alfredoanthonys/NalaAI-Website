"use client";

import { MotionConfig } from "motion/react";

/**
 * DESIGN_SYSTEM §6 — `reducedMotion="user"` makes every motion component on the
 * page honour the OS setting: transforms are dropped, opacity fades remain.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}
