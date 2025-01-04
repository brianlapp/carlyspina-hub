import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-sage-50/50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Welcome to CarlySpina.com
          </h2>
          <p className="text-lg md:text-xl text-sage-600 leading-relaxed">
            Welcome to a space of healing and transformation. As a dedicated practitioner specializing in Spinal Energetics, 
            Reiki, and Akashic Records Reading, I offer personalized sessions designed to nurture your body, mind, and soul.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-lg hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              Book a Session
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
            >
              Learn More
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};