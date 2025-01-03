import { Navigation } from "@/components/Navigation";
import { SpinalEnergeticsHero } from "@/components/SpinalEnergeticsHero";
import { SpinalEnergeticsContent } from "@/components/SpinalEnergeticsContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const SpinalEnergetics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SpinalEnergeticsHero />
      <SpinalEnergeticsContent />
      <FooterTeaser />
    </div>
  );
};

export default SpinalEnergetics;