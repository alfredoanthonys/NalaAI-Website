import { GridRails } from "@/components/primitives/grid-rails";
import { AboutSection } from "@/components/site/about-section";
import { CtaBand } from "@/components/site/cta-band";
import { DashboardSection } from "@/components/site/dashboard-section";
import { Faq } from "@/components/site/faq";
import { FeaturesSection } from "@/components/site/features-section";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Nav } from "@/components/site/nav";
import { PricingPreview } from "@/components/site/pricing-preview";
import { ComparisonSection } from "@/components/site/comparison-section";
import { Testimonials } from "@/components/site/testimonials";
import { WhatsappFab } from "@/components/site/whatsapp-fab";

/**
 * DESIGN_SYSTEM §8 — the page has a shape rather than a scroll of identical
 * blocks: inset gradient → two tinted columns → about → alternating feature
 * rows → testimonial rail → pricing cards → accordion → inset gradient.
 *
 * Everything between the two gradient panels is wrapped in a single <GridRails>
 * so the hero's grid texture carries down the page as one continuous drafting
 * frame, closed top and bottom. The frame stopping at the closing panel is what
 * makes that panel land.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <GridRails edges="both">
          <ComparisonSection />
          <AboutSection />
          <FeaturesSection />
          <DashboardSection />
          <Testimonials />
          <PricingPreview />
          <Faq />
        </GridRails>

        <CtaBand />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
