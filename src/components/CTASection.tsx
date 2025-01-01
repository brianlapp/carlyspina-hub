import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-sage-900 mb-6">Ready to Take the Next Step?</h2>
          <p className="text-sage-600 mb-8">
            Explore our services or book a session today. Your path to wellness begins here.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Book Now</Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};