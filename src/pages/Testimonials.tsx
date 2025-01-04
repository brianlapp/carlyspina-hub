import { Navigation } from "@/components/Navigation";
import { TestimonialsHero } from "@/components/testimonials/TestimonialsHero";
import { TestimonialsContent } from "@/components/testimonials/TestimonialsContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <TestimonialsHero />
      <TestimonialsContent />
      <FooterTeaser />
    </div>
  );
};

export default Testimonials;