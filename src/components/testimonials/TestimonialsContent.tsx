import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "My spinal energetic journey started with Carly, as I wasn't new to energy work but this was something I really wanted to try. My first session with Carly was warm, inviting and she really helped me understand what to expect before the session started. The way my body responded to the session was unlike anything I experienced before, but my body was finally able to release pent up energy. I was able to process my emotions and all the while Carly was supporting me. I left feeling lighter, more connected to myself and more emotionally centered. Now I know this is going to be something I wanted to do more frequently. Carly is so kind, loving and provides a safe and supportive environment. If you are looking to work with a true gem and a beautiful soul Carly is your girl.",
    author: "Karen B",
    service: "Spinal Energetics"
  },
  {
    content: "I had the privilege of receiving a spinal treatment from Carly Spina, and I can't recommend her highly enough. Carly created such a safe and comfortable environment during the session, allowing me to fully relax and trust the process. What truly stood out was her ability to tap into deeper struggles I wasn't even aware of—issues that turned out to be critical to both my physical and emotional healing. Her intuitive approach and expertise have been transformative for me, and I wholeheartedly encourage anyone seeking true healing to book a treatment with Carly Spina.",
    author: "David Haas",
    service: "Spinal Treatment"
  },
  {
    content: "I have been blessed with the opportunity to have spinal energetics, reiki sessions, and Akasha record readings from Carly Spina. Carly truly is a light worker and a healer. I have seen Carly on multiple occasions and my experiences have been nothing but incredible. During my sessions, she made me feel comfortable, calm and at ease. It was incredible to see the headway I developed with my spinal energetic treatments, and the rejuvenating feelings I experienced. It was actually insane to me. I always left feeling happy, confident and more grounded than ever. Carly has taught me how to shift my mindset, she has opened my awareness to the unless possibility my life has to offer. I highly recommend her services, she is amazing, knowledgeable, and an expert in her field.",
    author: "Melinda Theaker",
    service: "Multiple Services"
  },
  {
    content: "I had an amazing experience with Carly Spina and had a Spinal Energetics session with her. Her intuitive approach helped release deep tension in my body, leaving me feeling both physically relaxed and mentally clear. Carly's skill and energy work truly made a difference. Highly recommend!",
    author: "Sarah R",
    service: "Spinal Energetics"
  }
];

export const TestimonialsContent = () => {
  return (
    <section className="py-20 bg-sage-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-sage-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="text-emerald-600 w-8 h-8 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sage-700 leading-relaxed mb-6">
                        {testimonial.content}
                      </p>
                      <div className="border-t border-sage-200 pt-4">
                        <p className="font-semibold text-sage-900">{testimonial.author}</p>
                        <p className="text-sm text-sage-600">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};