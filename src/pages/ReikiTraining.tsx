import { Navigation } from "@/components/Navigation";
import { ReikiTrainingHero } from "@/components/reiki-training/ReikiTrainingHero";
import { ReikiTrainingContent } from "@/components/reiki-training/ReikiTrainingContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const ReikiTraining = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ReikiTrainingHero />
      <ReikiTrainingContent />
      <FooterTeaser />
    </div>
  );
};

export default ReikiTraining;