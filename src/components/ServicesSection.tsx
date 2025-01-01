import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Spinal Energetics",
    description: "Align your physical and energetic self for lasting balance.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Reiki",
    description: "Harness universal energy to restore harmony and vitality.",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Reiki Training",
    description: "Embark on a journey to become a certified Reiki practitioner.",
    image: "https://images.unsplash.com/photo-1514845505178-849cebf1a91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Akashic Records Reading",
    description: "Gain clarity and insight into your soul's journey.",
    image: "https://images.unsplash.com/photo-1606336434394-e6c9ed516f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Workshops",
    description: "Join us for group sessions on spinal energetics, restorative yoga, Reiki, and sound bath.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-sage-900 mb-6">Explore Our Transformative Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-none">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-sage-900 mb-2">{service.title}</h3>
                  <p className="text-sage-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">Learn More About Our Services</Button>
        </motion.div>
      </div>
    </section>
  );
};