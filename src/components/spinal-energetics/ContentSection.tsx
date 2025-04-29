import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
          <div className="lg:w-1/2 px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-custom-sage-light to-custom-sage bg-clip-text text-transparent">
              {title}
            </h2>
            {content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg text-sage-600 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {showButton && (
              <div className="mt-8">
                <Button 
                  className="bg-custom-sage hover:bg-custom-sage/90 text-white px-12 py-6 text-lg h-auto"
                  onClick={() => window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank')}
                >
                  Book Your Session Now
                </Button>
              </div>
            )}
          </div>
          
          {image && (
            <div className="lg:w-1/2 px-4 sm:px-6">
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
      </div>
    </motion.div>
  );
};