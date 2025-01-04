import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Spinal Energetics",
    description: "Align your physical and energetic self for lasting balance.",
    image: "/lovable-uploads/Spinal-Energetics.png"
  },
  {
    title: "Reiki",
    description: "Harness universal energy to restore harmony and vitality.",
    image: "/lovable-uploads/Reiki.png"
  },
  {
    title: "Reiki Training",
    description: "Embark on a journey to become a certified Reiki practitioner.",
    image: "/lovable-uploads/Reiki-Training.png"
  },
  {
    title: "Akashic Records Reading",
    description: "Gain clarity and insight into your soul's journey.",
    image: "/lovable-uploads/Akashic-Records-Reading.png"
  },
  {
    title: "Workshops",
    description: "Join us for group sessions on spinal energetics, restorative yoga, Reiki, and sound bath.",
    image: "/lovable-uploads/workshops.png"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sage-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Explore Our Transformative Services
          </h2>
          <p className="text-lg text-sage-600 max-w-3xl mx-auto mb-16">
            Discover a range of holistic healing modalities designed to support your wellness journey and spiritual growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center bg-white">
                    <h3 className="text-xl font-semibold text-sage-900 mb-2">{service.title}</h3>
                    <p className="text-sage-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-none md:max-w-[calc(66.666%-2rem)] lg:max-w-[calc(66.666%-1rem)] mx-auto">
                {services.slice(3).map((service, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6 text-center bg-white">
                        <h3 className="text-xl font-semibold text-sage-900 mb-2">{service.title}</h3>
                        <p className="text-sage-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="mt-16 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg h-auto shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};