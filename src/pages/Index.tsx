import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { FooterTeaser } from "@/components/FooterTeaser";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <FooterTeaser />
    </div>
  );
};

export default Index;