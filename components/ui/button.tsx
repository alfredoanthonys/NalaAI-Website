import { isValidElement } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * DESIGN_SYSTEM §5.3 — four button variants, all on --radius-sm (8px),
 * 14–16px horizontal × 10–12px vertical padding, medium weight, no uppercase,
 * no icon unless it clarifies the action.
 *
 * §6 hover: darken ~8% and lift via the shadow token. No scale transform —
 * scale reads as "AI-generated template".
 */
const buttonVariants = cva(
  // No `outline-none` here: the global `:focus-visible` rule in globals.css is
  // the one focus treatment for the whole site (§7), and shadcn's default would
  // silently suppress it.
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-[background-color,border-color,box-shadow,color] duration-200 ease-out select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /** Primary — brand blue on white sections. */
        default:
          "bg-brand-500 text-white shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:bg-brand-600 hover:shadow-card",
        /**
         * Primary with a haloed outline: a white gap ring and a hairline
         * `--color-border` edge outside it. Assumes a white surface behind, so
         * it belongs in the nav bar rather than on tinted sections.
         */
        outlined:
          "bg-brand-500 text-white shadow-[0_0_0_4px_var(--color-surface-0),0_0_0_5px_var(--color-line)] hover:bg-brand-600 hover:shadow-[0_0_0_4px_var(--color-surface-0),0_0_0_5px_var(--color-brand-300)]",
        /** Secondary on white — white fill, hairline border. */
        secondary:
          "border-line bg-white text-ink-900 hover:border-ink-400/60 hover:bg-surface-50 hover:shadow-card",
        /** Solid on the gradient hero — white fill, deep-blue label. */
        onDark:
          "bg-white text-brand-900 shadow-[0_1px_2px_rgba(15,31,77,0.16)] hover:bg-white/90 hover:shadow-panel",
        /** Ghost on the gradient hero — translucent border, white label. */
        ghost:
          "border-white/40 bg-white/5 text-white hover:border-white/70 hover:bg-white/15",
        /** Quiet text button, used inside cards and the footer. */
        link: "text-brand-500 underline-offset-4 hover:text-brand-600 hover:underline",
      },
      size: {
        default: "h-11 px-4 text-small",
        sm: "h-9 px-3.5 text-small",
        lg: "h-12 px-5 text-body",
        block: "h-11 w-full px-4 text-small",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  nativeButton,
  render,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  // Most CTAs on this site are links styled as buttons. Base UI warns (and
  // drops native button semantics) unless it is told the rendered element is
  // not a <button>, so infer it from `render` instead of repeating the flag at
  // every call site.
  const rendersAnchor = isValidElement(render) && render.type === "a"

  return (
    <ButtonPrimitive
      data-slot="button"
      render={render}
      nativeButton={nativeButton ?? !rendersAnchor}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
