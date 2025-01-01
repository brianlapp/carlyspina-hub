import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Spinal Energetics",
    description: "Align your physical and energetic self for lasting balance.",
    icon: "✨",
  },
  {
    title: "Reiki",
    description: "Harness universal energy to restore harmony and vitality.",
    icon: "🌟",
  },
  {
    title: "Reiki Training",
    description: "Embark on a journey to become a certified Reiki practitioner.",
    icon: "📚",
  },
  {
    title: "Akashic Records Reading",
    description: "Gain clarity and insight into your soul's journey.",
    icon: "🔮",
  },
  {
    title: "Workshops",
    description: "Join us for group sessions on spinal energetics, restorative yoga, Reiki, and sound bath.",
    icon: "🎵",
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
              <Card key={index} className="border-sage-200 hover:border-sage-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-sage-900 mb-2">{service.title}</h3>
                  <p className="text-sage-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="mt-8 bg-sage-600 hover:bg-sage-700">Learn More About Our Services</Button>
        </motion.div>
      </div>
    </section>
  );
};