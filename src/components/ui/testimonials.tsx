"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "My spinal energetic journey started with Carly, as I wasn't new to energy work but this was something I really wanted to try. My first session with Carly was warm, inviting and she really helped me understand what to expect before the session started. The way my body responded to the session was unlike anything I experienced before, but my body was finally able to release pent up energy.",
    author: "Karen B",
    service: "Spinal Energetics"
  },
  {
    content: "I had the privilege of receiving a spinal treatment from Carly Spina, and I can't recommend her highly enough. Carly created such a safe and comfortable environment during the session, allowing me to fully relax and trust the process. What truly stood out was her ability to tap into deeper struggles I wasn't even aware of—issues that turned out to be critical to both my physical and emotional healing.",
    author: "David Haas",
    service: "Spinal Treatment"
  },
  {
    content: "I have been blessed with the opportunity to have spinal energetics, reiki sessions, and Akasha record readings from Carly Spina. Carly truly is a light worker and a healer. I have seen Carly on multiple occasions and my experiences have been nothing but incredible. During my sessions, she made me feel comfortable, calm and at ease.",
    author: "Melinda Theaker",
    service: "Multiple Services"
  },
  {
    content: "I had an amazing experience with Carly Spina and had a Spinal Energetics session with her. Her intuitive approach helped release deep tension in my body, leaving me feeling both physically relaxed and mentally clear. Carly's skill and energy work truly made a difference. Highly recommend!",
    author: "Sarah R",
    service: "Spinal Energetics"
  }
];

function Testimonials() {
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
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-[#f4f4f2] bg-clip-text text-transparent">
            Client Experiences
          </h2>
          <p className="text-center text-white/90 text-lg max-w-2xl mx-auto">
            Read how our healing services have transformed lives and brought peace, balance, and renewal to our cherished clients
          </p>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-[#f4f4f2] backdrop-blur-sm rounded-xl h-full lg:col-span-2 p-8 border border-sage-200 hover:shadow-lg transition-all duration-300">
                    <img 
                      src="/lotus-icon.png" 
                      alt="Lotus" 
                      className="w-12 h-8 object-contain text-custom-sage mb-4"
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
                        <Avatar className="h-10 w-10 bg-sage-100 border-2 border-sage-200">
                          <AvatarFallback className="text-sage-700 font-medium">
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
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 bg-custom-sage hover:bg-custom-sage/90 text-white" />
              <CarouselNext className="-right-12 bg-custom-sage hover:bg-custom-sage/90 text-white" />
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
                    ? "bg-custom-sage w-4" 
                    : "bg-sage-200 hover:bg-sage-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };