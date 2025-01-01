import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Spinal Energetics",
    description: "Align your body's energy centers through gentle spinal manipulation and energy work.",
    icon: "🌟",
    delay: 0.1,
  },
  {
    title: "Reiki",
    description: "Experience deep relaxation and healing through traditional Reiki energy therapy.",
    icon: "✨",
    delay: 0.2,
  },
  {
    title: "Akashic Records Reading",
    description: "Access your soul's journey and gain insight into your life's purpose.",
    icon: "📚",
    delay: 0.3,
  },
  {
    title: "Reiki Training",
    description: "Learn the art of Reiki healing in a supportive and professional environment.",
    icon: "🎓",
    delay: 0.4,
  },
  {
    title: "Workshops",
    description: "Join group sessions for spinal energetics, yoga, Reiki, and sound bath experiences.",
    icon: "🎵",
    delay: 0.5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-sage-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-8 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block rounded-full bg-sage-100 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-sage-700">Holistic Healing & Wellness</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-4xl font-bold tracking-tight text-sage-900 sm:text-6xl"
          >
            Transform Your Energy,
            <br />
            Transform Your Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-sage-600"
          >
            Experience profound healing through a unique blend of ancient wisdom and modern techniques.
            Begin your journey to wellness today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-block rounded-full bg-sage-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-sage-800"
            >
              Book a Session
            </a>
          </motion.div>
        </motion.div>
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
            <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Services</h2>
            <p className="mx-auto max-w-2xl text-sage-600">
              Discover the perfect healing modality for your journey to wellness and spiritual growth.
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
      <section id="contact" className="bg-white px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Begin Your Journey</h2>
            <p className="mx-auto mb-8 max-w-2xl text-sage-600">
              Ready to transform your life? Get in touch to schedule your session or learn more about
              our services.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-block rounded-full bg-sage-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-sage-800"
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