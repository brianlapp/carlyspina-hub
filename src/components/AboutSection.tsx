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
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/cb12900f-d9fd-4472-b84c-08c1a23d1cb8.png"
                alt="Carly with a singing bowl"
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-sage-900 mb-6">About Carly</h2>
              <p className="text-sage-600 mb-8">
                With years of experience and a deep commitment to her practice, Carly combines ancient wisdom with modern techniques to create a safe, nurturing space for healing and growth. Whether you're new to energy work or a seasoned seeker, Carly is here to support your journey.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Meet Carly</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};