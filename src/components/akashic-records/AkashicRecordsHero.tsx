import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AkashicRecordsHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-sage-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 mb-6">
            Akashic Records Reading: Unlock the Secrets of Your Soul
          </h1>
          <p className="text-xl text-sage-600 mb-8">
            Access your soul's journey, gain profound insights, and discover your true purpose through the wisdom of the Akashic Records.
          </p>
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
          >
            Book Your Akashic Records Reading Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};