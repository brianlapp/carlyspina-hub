import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    window.open('https://app.acuityscheduling.com/schedule/fb70b564', '_blank');
  };

  return (
    <section className="relative py-32">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Explore our services or book a session today. Your path to wellness begins here.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              className="bg-custom-sage hover:bg-custom-sage/90 text-white px-12 py-6 text-lg h-auto"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white bg-white/10 hover:bg-custom-sage px-12 py-6 text-lg h-auto"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};