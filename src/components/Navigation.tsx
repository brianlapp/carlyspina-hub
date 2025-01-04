import { useState } from "react";
import { MobileNav } from "./navigation/MobileNav";
import { DesktopNav } from "./navigation/DesktopNav";
import { Logo } from "./navigation/Logo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const services = [
    { name: "Spinal Energetics", path: "/spinal-energetics" },
    { name: "Reiki", path: "/reiki" },
    { name: "Reiki Training", path: "/reiki-training" },
    { name: "Akashic Records Reading", path: "/akashic-records" },
    { name: "Workshops", path: "/workshops" }
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/testimonials" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex justify-between items-center relative">
            <MobileNav 
              services={services} 
              navItems={navItems} 
              onClose={() => setIsOpen(false)} 
            />
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <Logo />
            </div>
          </div>
          <DesktopNav services={services} navItems={navItems} />
        </div>
      </div>
    </nav>
  );
};