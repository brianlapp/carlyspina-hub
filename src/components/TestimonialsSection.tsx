import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    content: "I had an amazing experience with Carly Spina and had a Spinal Energetics session with her. Her intuitive approach helped release deep tension in my body, leaving me feeling both physically relaxed and mentally clear. Carly's skill and energy work truly made a difference. Highly recommend!",
    author: "Sarah R",
  },
  {
    content: "I had the privilege of receiving a spinal treatment from Carly Spina, and I can't recommend her highly enough. Carly created such a safe and comfortable environment during the session, allowing me to fully relax and trust the process. What truly stood out was her ability to tap into deeper struggles I wasn't even aware of—issues that turned out to be critical to both my physical and emotional healing.",
    author: "David Haas",
  },
  {
    content: "I have been blessed with the opportunity to have spinal energetics, reiki sessions, and Akasha record readings from Carly Spina. Carly truly is a light worker and a healer. I have seen Carly on multiple occasions and my experiences have been nothing but incredible. During my sessions, she made me feel comfortable, calm and at ease.",
    author: "Melinda Theaker",
  },
];

export const TestimonialsSection = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => api?.scrollTo(index);

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Here's What Clients Are Saying
          </h2>
          <div className="max-w-5xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <div className="bg-white rounded-lg shadow-lg p-8 h-full border border-gray-100">
                        <p className="text-gray-700 italic mb-6 leading-relaxed">{testimonial.content}</p>
                        <p className="text-gray-900 font-semibold">- {testimonial.author}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 bg-emerald-600 hover:bg-emerald-700 text-white" />
                <CarouselNext className="-right-12 bg-emerald-600 hover:bg-emerald-700 text-white" />
              </div>
            </Carousel>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all duration-300",
                    current === index 
                      ? "bg-emerald-600 w-4" 
                      : "bg-emerald-200 hover:bg-emerald-300"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <Button 
            size="lg" 
            className="mt-12 bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg h-auto"
            onClick={() => navigate('/testimonials')}
          >
            Read More Testimonials
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
