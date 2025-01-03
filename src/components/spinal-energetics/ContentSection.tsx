import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";

interface ContentSectionProps {
  title: string;
  content: string[];
  image?: string;
  imageAlt?: string;
  showButton?: boolean;
  reverse?: boolean;
}

export const ContentSection = ({
  title,
  content,
  image,
  imageAlt,
  showButton,
  reverse
}: ContentSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
        <div className="lg:w-1/2 px-8">
          <SectionTitle>{title}</SectionTitle>
          {content.map((paragraph, pIndex) => (
            <p key={pIndex} className="text-lg text-sage-600 mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
          
          {showButton && (
            <div className="mt-8">
              <Button 
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors px-12 py-6 text-lg h-auto"
                onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
              >
                Book Your Session Now
              </Button>
            </div>
          )}
        </div>
        
        {image && (
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={image} 
                alt={imageAlt}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};