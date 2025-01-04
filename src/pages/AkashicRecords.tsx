import { Navigation } from "@/components/Navigation";
import { AkashicRecordsHero } from "@/components/akashic-records/AkashicRecordsHero";
import { AkashicRecordsContent } from "@/components/akashic-records/AkashicRecordsContent";
import { FooterTeaser } from "@/components/FooterTeaser";

const AkashicRecords = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AkashicRecordsHero />
      <AkashicRecordsContent />
      <FooterTeaser />
    </div>
  );
};

export default AkashicRecords;