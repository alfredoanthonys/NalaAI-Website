"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * DESIGN_SYSTEM §6 — scroll: content fades and rises into place on
 * scroll-into-view, 8–12px translate, no bounce, once only.
 */
const RISE = 12;
const EASE = [0.22, 1, 0.36, 1] as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: RISE },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

type RevealTag = "div" | "section" | "li" | "ul" | "article" | "header" | "figure";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: RISE },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE, delay } },
      }}
    >
      {children}
    </Component>
  );
}

/**
 * Wraps a grid or list so its children rise in sequence rather than as one
 * block. §6 caps the stagger at ~60ms — one orchestrated moment, not a cascade.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.06,
  as = "div",
}: RevealProps & { stagger?: number }) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: Omit<RevealProps, "delay">) {
  const Component = motion[as];

  return (
    <Component className={className} variants={revealVariants}>
      {children}
    </Component>
  );
}
