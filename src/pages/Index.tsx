import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl font-semibold text-sage-900 mb-4 md:mb-0">CarlySpina.com</h1>
            <NavigationMenu>
              <NavigationMenuList>
                {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className="px-4 py-2 text-sage-600 hover:text-sage-900 transition-colors">
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-sage-900 mb-6">
            Awaken Your Inner Energy: Holistic Healing and Spiritual Wellness
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Discover the transformative power of energy healing and spiritual alignment with Carly Spina, your guide to holistic well-being.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-sage-900 mb-6">Welcome to CarlySpina.com</h2>
            <p className="text-sage-600 leading-relaxed">
              Welcome to CarlySpina.com, where healing meets transformation. Carly Spina is a dedicated practitioner specializing in Spinal Energetics, Reiki, Akashic Records Reading, and a variety of holistic modalities. With a passion for empowering others to embrace their highest potential, Carly offers personalized sessions and group experiences designed to nurture the body, mind, and soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-sage-900 mb-12">Here's What Clients Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-sage-200">
                  <CardContent className="p-6">
                    <p className="text-sage-600 italic mb-4">{testimonial.content}</p>
                    <p className="text-sage-900 font-semibold">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="mt-8 bg-sage-600 hover:bg-sage-700">Read More Testimonials</Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-sage-900 mb-6">About Carly</h2>
            <p className="text-sage-600 mb-8">
              With years of experience and a deep commitment to her practice, Carly combines ancient wisdom with modern techniques to create a safe, nurturing space for healing and growth. Whether you're new to energy work or a seasoned seeker, Carly is here to support your journey.
            </p>
            <Button className="bg-sage-600 hover:bg-sage-700">Meet Carly</Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-sage-900 mb-6">Ready to Take the Next Step?</h2>
            <p className="text-sage-600 mb-8">
              Explore our services or book a session today. Your path to wellness begins here.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button className="bg-sage-600 hover:bg-sage-700">Book Now</Button>
              <Button variant="outline" className="border-sage-600 text-sage-600 hover:bg-sage-50">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Teaser Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-sage-900 mb-6">Stay Connected</h2>
            <p className="text-sage-600 mb-8">
              Stay connected with upcoming workshops, special offers, and insights into energy healing.
            </p>
            <Button className="bg-sage-600 hover:bg-sage-700">Join Our Mailing List</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;