import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const FooterTeaser = () => {
  const [showForm, setShowForm] = useState(false);

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
          {!showForm ? (
            <Button 
              className="bg-sage-50 text-sage-900 hover:bg-sage-100"
              onClick={() => setShowForm(true)}
            >
              Join Our Mailing List
            </Button>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto space-y-4"
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
                className="w-full"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full"
              />
              <Button type="submit" className="w-full bg-sage-50 text-sage-900 hover:bg-sage-100">
                Subscribe
              </Button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};