import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Welcome to Holistic Healing",
    description: "Begin your journey to wellness and spiritual growth",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Serene water and trees image
    color: "from-sage-50 to-earth-100"
  },
  {
    title: "Transform Your Energy",
    description: "Experience profound healing through ancient wisdom and modern techniques",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22", // Warm, glowing lights between trees
    color: "from-earth-50 to-sage-100"
  },
  {
    title: "Discover Inner Peace",
    description: "Join us on a path to spiritual awakening and emotional balance",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Aerial view of serene mountains
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