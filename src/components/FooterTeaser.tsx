import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FooterTeaser = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-sage-900 mb-6">Stay Connected</h2>
          <p className="text-sage-600 mb-8">
            Stay connected with upcoming workshops, special offers, and insights into energy healing.
          </p>
          <Button className="bg-sage-600 hover:bg-sage-700">Join Our Mailing List</Button>
        </motion.div>
      </div>
    </section>
  );
};