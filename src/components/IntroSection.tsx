import { motion } from "framer-motion";

export const IntroSection = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold section-title mb-6">Welcome to CarlySpina.com</h2>
          <p className="text-sage-600 leading-relaxed">
            Welcome to CarlySpina.com, where healing meets transformation. Carly Spina is a dedicated practitioner specializing in Spinal Energetics, Reiki, Akashic Records Reading, and a variety of holistic modalities. With a passion for empowering others to embrace their highest potential, Carly offers personalized sessions and group experiences designed to nurture the body, mind, and soul.
          </p>
        </motion.div>
      </div>
    </section>
  );
};