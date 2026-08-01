import { whatsappFab } from "@/content/home";

/**
 * The wa.me link, or null while no number is configured.
 *
 * Everything that offers to open WhatsApp goes through here so there is exactly
 * one place to fill in the number. Callers render a no-op control when this is
 * null rather than an <a href="#">, which would jump the page to the top.
 */
export function whatsappHref(): string | null {
  const { number, prefill } = whatsappFab;
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(prefill)}` : null;
}
