import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "../spinal-energetics/SectionTitle";

export const TrainingOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24 bg-white rounded-2xl p-8 shadow-lg"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle>What is Reiki Training?</SectionTitle>
          <p className="text-lg text-sage-600 mb-6">
            Reiki Training is an empowering journey where individuals learn to harness and channel universal life energy to heal themselves and others. Rooted in ancient Japanese healing traditions, Reiki training equips you with the knowledge and techniques to work with energy fields, align chakras, and promote balance and well-being.
          </p>
          <p className="text-lg text-sage-600 mb-8">
            Whether you're new to energy healing or looking to deepen your practice, Reiki Training provides a transformative experience that integrates physical, emotional, and spiritual growth.
          </p>
          <Button 
            className="bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors px-12 py-6 text-lg h-auto"
            onClick={() => window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank')}
          >
            Begin Your Journey
          </Button>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/c10da0aa-258e-40b8-af1b-279b0a590a87.png"
            alt="Reiki training session with energy symbols"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};