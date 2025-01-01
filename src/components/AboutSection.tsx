import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-sage-900 mb-6">About Carly</h2>
          <p className="text-sage-600 mb-8">
            With years of experience and a deep commitment to her practice, Carly combines ancient wisdom with modern techniques to create a safe, nurturing space for healing and growth. Whether you're new to energy work or a seasoned seeker, Carly is here to support your journey.
          </p>
          <Button className="bg-sage-600 hover:bg-sage-700">Meet Carly</Button>
        </motion.div>
      </div>
    </section>
  );
};