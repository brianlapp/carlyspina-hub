"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
                      src="/lovable-uploads/a82fd9e3-bf18-4a96-b8bd-de0ddb269bb4.png" 
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