import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface CallToActionProps {
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  onSecondaryClick?: () => void;
}

export const CallToAction = ({
  primaryText = "Book With Carly Spina",
  primaryLink = "https://windsorhealingandwellness.square.site/s/appointments",
  secondaryText = "Join Our Mailing List",
  onSecondaryClick
}: CallToActionProps) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    // For now, we'll just show a success message
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our mailing list!",
    });
    setShowForm(false);
    setEmail("");
    setName("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 border border-sage-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sage-50/50 to-emerald-50/50 z-0" />
      
      <div className="relative z-10">
        <div className="flex flex-col gap-4 items-center">
          <Button 
            className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors min-w-[200px] h-14 text-lg"
            onClick={() => window.open(primaryLink, '_blank')}
          >
            {primaryText}
          </Button>
          
          {!showForm ? (
            <Button 
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 min-w-[200px] h-14 text-lg"
              onClick={() => setShowForm(true)}
            >
              {secondaryText}
            </Button>
          ) : (
            <motion.form 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full max-w-md space-y-4"
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
              <div className="flex gap-2">
                <Button 
                  type="submit"
                  className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex-1 h-12"
                >
                  Subscribe
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 h-12"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </motion.div>
  );
};