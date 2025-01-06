import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/CallToAction";

export const BookingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-sage-100 mb-16"
    >
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-custom-sage-light to-custom-sage bg-clip-text text-transparent">
        Book Your Session Today
      </h2>
      <p className="text-lg text-sage-600 mb-8">
        Are you ready to unlock the power of your body's innate wisdom? Experience the transformative benefits of Spinal Energetics with Carly Spina. Each session is a journey towards holistic wellness, tailored to your unique needs and goals.
      </p>
      <CallToAction />
    </motion.div>
  );
};