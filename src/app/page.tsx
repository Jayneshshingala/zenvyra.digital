import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { LogoSlider } from "@/components/social/LogoSlider";
import { SuccessStats } from "@/components/social/SuccessStats";
import { ReviewSection } from "@/components/social/ReviewSection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — 3D Anti-Gravity */}
      <HeroSection />

      {/* 2. Brand Marquee Slider */}
      <LogoSlider />

      {/* 3. Services Bento Grid */}
      <ServicesGrid />

      {/* 4. Success Metrics & Social Proof */}
      <SuccessStats />

      {/* 5. Client Testimonials */}
      <ReviewSection />

      {/* 6. Final Conversion CTA */}
      <FinalCTA />
    </>
  );
}

