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
          <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">Read More Testimonials</Button>
        </motion.div>
      </div>
    </section>
  );
};