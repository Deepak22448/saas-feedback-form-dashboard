import { Hero } from "@/components/hero-section";
import { PricingSection } from "./pricing-section";
import { FeaturesSection } from "./features-section";

export const LandingPage = () => {
  return (
    <section>
      <Hero />
      <FeaturesSection />
      <PricingSection />
    </section>
  );
};
