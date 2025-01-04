import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const services = [
    { name: "Spinal Energetics", path: "/spinal-energetics" },
    // More services will be added here
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "Contact", path: "/#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-semibold text-sage-900">CarlySpina.com</Link>
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`text-lg px-2 py-2 rounded-md transition-colors ${
                        location.pathname === item.path 
                          ? "bg-sage-50 text-sage-900 font-medium" 
                          : "text-sage-600 hover:text-sage-900 hover:bg-sage-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-sage-900 px-2 py-1">
                      Services
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`block px-2 py-2 text-lg rounded-md ${
                          location.pathname === service.path 
                            ? "bg-sage-50 text-sage-900 font-medium" 
                            : "text-sage-600 hover:text-sage-900 hover:bg-sage-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  <Button 
                    className="mt-4 w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
                  >
                    Book Now
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link 
                      to={item.path}
                      className={`px-4 py-2 text-sage-600 hover:text-sage-900 transition-colors ${
                        location.pathname === item.path ? "text-sage-900 font-medium" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sage-600 hover:text-sage-900 transition-colors">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className={`block px-4 py-2 text-sage-600 hover:text-sage-900 hover:bg-sage-50 rounded-md transition-colors ${
                            location.pathname === service.path ? "text-sage-900 font-medium bg-sage-50" : ""
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button 
              className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};