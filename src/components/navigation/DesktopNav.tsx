import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent 
} from "@/components/ui/navigation-menu";

interface DesktopNavProps {
  services: Array<{ name: string; path: string }>;
  navItems: Array<{ name: string; path: string }>;
}

export const DesktopNav = ({ services, navItems }: DesktopNavProps) => {
  const location = useLocation();
  
  // Check if current path is a service page
  const isServicePage = services.some(service => location.pathname === service.path);
  
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link 
              to="/"
              className={`px-4 py-2 text-sage-600 hover:text-sage-900 transition-colors text-base ${
                location.pathname === "/" ? "text-sage-900 font-medium" : ""
              }`}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger 
              className={`text-sage-600 hover:text-sage-900 transition-colors text-base ${
                isServicePage ? "text-sage-900 font-medium" : ""
              }`}
              style={{ backgroundColor: 'transparent' }}
            >
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0">
              <div className="w-[250px] p-2 bg-white shadow-lg rounded-md">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className={`block px-4 py-2 text-sage-600 hover:text-sage-900 hover:bg-sage-50 rounded-md transition-colors text-base ${
                      location.pathname === service.path ? "text-sage-900 font-medium bg-sage-50" : ""
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {navItems.slice(1).map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link 
                to={item.path}
                className={`px-4 py-2 text-sage-600 hover:text-sage-900 transition-colors text-base ${
                  location.pathname === item.path ? "text-sage-900 font-medium" : ""
                }`}
              >
                {item.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button 
        className="bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors"
        onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
      >
        Book Now
      </Button>
    </div>
  );
};