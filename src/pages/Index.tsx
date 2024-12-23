import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { HeroSlider } from "@/components/HeroSlider";

const services = [
  {
    title: "Spinal Energetics",
    description: "Experience deep relaxation and healing through specialized spinal massage therapy that aligns your body's energy centers.",
    icon: "🌿",
    delay: 0.1,
  },
  {
    title: "Reiki Healing",
    description: "Restore balance and promote healing through traditional Reiki energy therapy sessions.",
    icon: "✨",
    delay: 0.2,
  },
  {
    title: "Akashic Records Reading",
    description: "Gain profound insights into your life's journey through guided Akashic Records sessions.",
    icon: "📚",
    delay: 0.3,
  },
  {
    title: "Reiki Training",
    description: "Learn the art of Reiki healing in our comprehensive training programs.",
    icon: "🎓",
    delay: 0.4,
  },
  {
    title: "Wellness Workshops",
    description: "Join our group sessions for spinal energetics, yoga, Reiki, and therapeutic sound baths.",
    icon: "🎵",
    delay: 0.5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-50 to-earth-100">
      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden">
        <HeroSlider />
      </section>

      {/* Services Section */}
      <section className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-earth-900 sm:text-4xl">Our Healing Services</h2>
            <p className="mx-auto max-w-2xl text-earth-600">
              Discover deep healing and transformation through our specialized massage and energy work services.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white/80 backdrop-blur-sm px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-earth-900 sm:text-4xl">Begin Your Healing Journey</h2>
            <p className="mx-auto mb-8 max-w-2xl text-earth-600">
              Ready to experience the transformative power of our healing therapies? Get in touch to schedule your session.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block rounded-full bg-earth-800 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-earth-700"
            >
              Contact Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;