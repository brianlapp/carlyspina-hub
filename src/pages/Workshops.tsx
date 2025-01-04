import { Navigation } from "@/components/Navigation";
import { WorkshopsHero } from "@/components/workshops/WorkshopsHero";
import { WorkshopsContent } from "@/components/workshops/WorkshopsContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const Workshops = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WorkshopsHero />
      <WorkshopsContent />
      <FooterTeaser />
    </div>
  );
};

export default Workshops;