import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceGrid } from "./services/ServiceGrid";

const services = [
  {
    title: "Spinal Energetics",
    description: "Align your physical and energetic self for lasting balance.",
    image: "/lovable-uploads/fdfad428-46c4-4752-80c6-fc7e1a8dbdfe.png",
    path: "/spinal-energetics"
  },
  {
    title: "Reiki",
    description: "Harness universal energy to restore harmony and vitality.",
    image: "/lovable-uploads/635cc028-c9e6-4af4-8a14-12e5d6eb5698.png",
    path: "/reiki"
  },
  {
    title: "Reiki Training",
    description: "Embark on a journey to become a certified Reiki practitioner.",
    image: "/lovable-uploads/27c85602-474e-4829-9e00-d918ab0bde21.png",
    path: "/reiki-training"
  },
  {
    title: "Akashic Records Reading",
    description: "Gain clarity and insight into your soul's journey.",
    image: "/lovable-uploads/ef096633-d4e7-4c80-853d-96faddfa0b80.png",
    path: "/akashic-records"
  },
  {
    title: "Workshops",
    description: "Join us for group sessions on spinal energetics, restorative yoga, Reiki, and sound bath.",
    image: "/lovable-uploads/workshops.png",
    path: "/workshops"
  },
];

export const ServicesSection = () => {
  const handleBookNow = () => {
    window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank');
  };

  return (
    <section id="services-section" className="py-24 bg-gradient-to-b from-white via-[#f4f4f2] to-[#626857]/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-custom-sage-light to-custom-sage bg-clip-text text-transparent">
            Explore Our Transformative Services
          </h2>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto mb-16">
            Discover a range of holistic healing modalities designed to support your wellness journey and spiritual growth.
          </p>
          
          <ServiceGrid services={services} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="mt-16 bg-custom-sage hover:bg-custom-sage/90 text-white px-12 py-6 text-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
