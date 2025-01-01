import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export const TestimonialsSection = () => {
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
          <h2 className="text-3xl font-semibold text-emerald-900 mb-12">Here's What Clients Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="relative bg-white/50 backdrop-blur-sm border border-emerald-100 shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-green-50/50 rounded-lg" />
                  <CardContent className="relative p-8">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/40 backdrop-blur-[2px] rounded-lg" />
                    <div className="relative">
                      <p className="text-emerald-800 italic mb-6 leading-relaxed">{testimonial.content}</p>
                      <p className="text-emerald-900 font-semibold">- {testimonial.author}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <Button className="mt-12 bg-emerald-600 hover:bg-emerald-700 text-white">Read More Testimonials</Button>
        </motion.div>
      </div>
    </section>
  );
};