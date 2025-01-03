import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export const FooterTeaser = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Load Campaign Monitor script
    const script = document.createElement('script');
    script.src = "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <h2 className="text-3xl font-semibold section-title mb-6">Stay Connected</h2>
          <p className="text-sage-600 mb-8">
            Stay connected with upcoming workshops, special offers, and insights into energy healing.
          </p>
          <motion.form 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="js-cm-form max-w-3xl mx-auto flex flex-wrap gap-4 justify-center"
            id="subForm"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="A61C50BEC994754B1D79C5819EC1255C7141A92B304A9377C8C065101967D8AAC28645E0F69C313EB6958FCC7D5C43FB26899D32CF316DB2E6F119F822628832"
          >
            <Input
              type="text"
              id="fieldName"
              name="cm-name"
              placeholder="Your Name"
              maxLength={200}
              required
              className="flex-1 min-w-[200px]"
            />
            <Input
              type="email"
              id="fieldEmail"
              name="cm-tjiythy-tjiythy"
              placeholder="Your Email"
              maxLength={200}
              required
              className="js-cm-email-input qa-input-email flex-1 min-w-[200px]"
              autoComplete="email"
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