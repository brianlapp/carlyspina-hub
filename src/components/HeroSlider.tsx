import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Experience Deep Healing",
    description: "Discover the transformative power of Reiki and Spinal Energetics massage",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4", // Calming spa setting
    color: "from-sage-50 to-earth-100"
  },
  {
    title: "Reiki Energy Healing",
    description: "Balance your body's energy centers through gentle, healing touch",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", // Peaceful meditation space
    color: "from-earth-50 to-sage-100"
  },
  {
    title: "Spinal Energetics",
    description: "Release tension and restore harmony through specialized spinal therapy",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35", // Serene wellness space
    color: "from-sage-100 to-earth-50"
  }
];

export const HeroSlider = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="md:basis-full">
            <div className={`relative h-[70vh] w-full overflow-hidden rounded-lg bg-gradient-to-r ${slide.color}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
                <div className="relative z-10 px-6 py-24 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl"
                  >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-sage-900 sm:text-6xl">
                      {slide.title}
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-sage-600">
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};