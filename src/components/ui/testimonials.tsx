"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 bg-gradient-to-b from-sage-50/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Client Experiences
          </h2>
          <p className="text-center text-sage-600 text-lg max-w-2xl mx-auto">
            Discover the transformative journeys of those who have experienced our healing services
          </p>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl h-full lg:col-span-2 p-8 border border-sage-200 hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/lovable-uploads/906d4f53-16be-4e1b-bf5c-13940464b3a7.png" 
                      alt="Lotus" 
                      className="w-12 h-8 object-contain text-emerald-600 mb-4"
                    />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-sage-900 mb-2">
                          {testimonial.service}
                        </h3>
                        <p className="text-sage-700 text-base line-clamp-6">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-4">
                        <Avatar className="h-10 w-10 bg-emerald-100 border-2 border-emerald-200">
                          <AvatarFallback className="text-emerald-700 font-medium">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sage-900 font-medium">{testimonial.author}</span>
                          <span className="text-sage-600 text-sm">{testimonial.service}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };