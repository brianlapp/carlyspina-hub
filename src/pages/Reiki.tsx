import { Navigation } from "@/components/Navigation";
import { ReikiHero } from "@/components/reiki/ReikiHero";
import { ReikiContent } from "@/components/reiki/ReikiContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const Reiki = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ReikiHero />
      <ReikiContent />
      <FooterTeaser />
    </div>
  );
};

export default Reiki;