import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 border border-sage-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sage-50/50 to-emerald-50/50 z-0" />
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors min-w-[200px] h-14 text-lg"
            onClick={() => window.open(primaryLink, '_blank')}
          >
            {primaryText}
          </Button>
          <Button 
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 min-w-[200px] h-14 text-lg"
            onClick={onSecondaryClick}
          >
            {secondaryText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};