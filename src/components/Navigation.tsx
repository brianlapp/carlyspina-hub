import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
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
          <Link to="/" className="text-2xl font-semibold text-sage-900 mb-4 md:mb-0">CarlySpina.com</Link>
          <div className="flex items-center gap-4">
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