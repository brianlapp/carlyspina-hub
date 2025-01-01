import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-sage-900 mb-6">
          Awaken Your Inner Energy: Holistic Healing and Spiritual Wellness
        </h1>
        <p className="text-xl text-sage-600 max-w-3xl mx-auto">
          Discover the transformative power of energy healing and spiritual alignment with Carly Spina, your guide to holistic well-being.
        </p>
      </motion.div>
    </section>
  );
};