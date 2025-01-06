import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface CallToActionProps {
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  onSecondaryClick?: () => void;
}

export const CallToAction = ({
  primaryText = "Book With Carly Spina",
  primaryLink = "https://windsorhealingandwellness.square.site/s/appointments",
  secondaryText = "Join Our Mailing List",
  onSecondaryClick
}: CallToActionProps) => {
  const [showForm, setShowForm] = useState(false);

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 border border-sage-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sage-50/50 to-sage-50/50 z-0" />
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            className="bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors min-w-[200px] h-14 text-lg"
            onClick={() => window.open(primaryLink, '_blank')}
          >
            {primaryText}
          </Button>
          <Button 
            variant="outline"
            className="border-custom-sage text-custom-sage hover:bg-custom-sage/10 min-w-[200px] h-14 text-lg"
            onClick={() => setShowForm(!showForm)}
          >
            {secondaryText}
          </Button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4 text-sage-800">Join our mailing list</h3>
            <motion.form 
              className="js-cm-form space-y-4"
              id="subForm"
              action="https://www.createsend.com/t/subscribeerror?description="
              method="post"
              data-id="A61C50BEC994754B1D79C5819EC1255C7141A92B304A9377C8C065101967D8AAC28645E0F69C313EB6958FCC7D5C43FB26899D32CF316DB2E6F119F822628832"
            >
              <div>
                <Input
                  type="text"
                  id="fieldName"
                  name="cm-name"
                  placeholder="Your Name"
                  maxLength={200}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  id="fieldEmail"
                  name="cm-tjiythy-tjiythy"
                  placeholder="Your Email"
                  maxLength={200}
                  required
                  className="js-cm-email-input qa-input-email w-full"
                  autoComplete="email"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors h-12"
              >
                Subscribe
              </Button>
            </motion.form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};