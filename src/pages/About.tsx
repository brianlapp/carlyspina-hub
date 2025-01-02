import { Navigation } from "@/components/Navigation";
import { AboutHero } from "@/components/AboutHero";
import { AboutContent } from "@/components/AboutContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <AboutContent />
      <FooterTeaser />
    </div>
  );
};

export default About;