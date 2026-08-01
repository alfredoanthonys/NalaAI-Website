import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge only knows Tailwind's stock scales. Our type scale
 * (`text-hero`, `text-h1`, …) and shadow tokens (`shadow-card`) are custom, so
 * without this it classifies `text-h1` as a *colour* utility and drops it the
 * moment a `text-ink-900` follows in the same `cn()` call.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["hero", "h1", "h2", "h3", "body", "small", "stat"] },
      ],
      "shadow": [{ shadow: ["card", "card-hover", "panel"] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
