import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";

import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";

import { TestimonialSection } from "@/components/layout/sections/testimonial";

import { Descriptions } from "@/components/layout/sections/descriptions";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Descriptions /> */}
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      {/* <ServicesSection /> */}
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      <PricingSection />
      {/* <ContactSection /> */}
      {/* <FAQSection /> */}
    </>
  );
}
