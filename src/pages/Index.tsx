import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSlider } from "@/components/HeroSlider";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Spinal Energetics",
    description: "Align your physical and energetic self for lasting balance.",
    icon: "🌿",
    delay: 0.1,
  },
  {
    title: "Reiki",
    description: "Harness universal energy to restore harmony and vitality.",
    icon: "✨",
    delay: 0.2,
  },
  {
    title: "Reiki Training",
    description: "Embark on a journey to become a certified Reiki practitioner.",
    icon: "🎓",
    delay: 0.3,
  },
  {
    title: "Akashic Records Reading",
    description: "Gain clarity and insight into your soul's journey.",
    icon: "📚",
    delay: 0.4,
  },
  {
    title: "Workshops",
    description: "Join us for group sessions on spinal energetics, restorative yoga, Reiki, and sound bath.",
    icon: "🎵",
    delay: 0.5,
  },
];

const testimonials = [
  {
    content: "I had an amazing experience with Carly Spina and had a Spinal Energetics session with her. Her intuitive approach helped release deep tension in my body, leaving me feeling both physically relaxed and mentally clear. Carly's skill and energy work truly made a difference. Highly recommend!",
    author: "Sarah R",
  },
  {
    content: "I had the privilege of receiving a spinal treatment from Carly Spina, and I can't recommend her highly enough. Carly created such a safe and comfortable environment during the session, allowing me to fully relax and trust the process. What truly stood out was her ability to tap into deeper struggles I wasn't even aware of—issues that turned out to be critical to both my physical and emotional healing. Her intuitive approach and expertise have been transformative for me, and I wholeheartedly encourage anyone seeking true healing to book a treatment with Carly Spina.",
    author: "David Haas",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-24 bg-sage-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">Welcome to CarlySpina.com</h2>
          <p className="text-earth-600 leading-relaxed">
            Welcome to CarlySpina.com, where healing meets transformation. Carly Spina is a dedicated practitioner specializing in Spinal Energetics, Reiki, Akashic Records Reading, and a variety of holistic modalities. With a passion for empowering others to embrace their highest potential, Carly offers personalized sessions and group experiences designed to nurture the body, mind, and soul.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl mb-4">
              Explore Our Transformative Services
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="bg-earth-100 hover:bg-earth-200 text-earth-800"
              size="lg"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl mb-4">
              Here's What Clients Are Saying
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-earth-600 italic">{testimonial.content}</p>
                    <p className="text-earth-800 font-semibold">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="bg-earth-100 hover:bg-earth-200 text-earth-800"
              size="lg"
            >
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* About Carly Section */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">About Carly</h2>
          <p className="text-earth-600 leading-relaxed">
            With years of experience and a deep commitment to her practice, Carly combines ancient wisdom with modern techniques to create a safe, nurturing space for healing and growth. Whether you're new to energy work or a seasoned seeker, Carly is here to support your journey.
          </p>
          <Button
            variant="outline"
            className="bg-earth-100 hover:bg-earth-200 text-earth-800"
            size="lg"
          >
            Meet Carly
          </Button>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 py-24 bg-earth-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">Ready to Take the Next Step?</h2>
          <p className="text-earth-600">
            Explore our services or book a session today. Your path to wellness begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-earth-800 hover:bg-earth-700 text-white">
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-earth-50 hover:bg-earth-100 text-earth-800"
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stay Connected Section */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-earth-900 sm:text-4xl">Stay Connected</h2>
          <p className="text-earth-600">
            Stay connected with upcoming workshops, special offers, and insights into energy healing.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-earth-100 hover:bg-earth-200 text-earth-800"
          >
            Join Our Mailing List
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;