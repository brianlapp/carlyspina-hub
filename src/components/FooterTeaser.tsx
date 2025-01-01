import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

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
          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center"
            name="newsletter"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 min-w-[200px]"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 min-w-[200px]"
            />
            <button 
              type="submit" 
              className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition-colors min-w-[120px]"
            >
              Subscribe
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};