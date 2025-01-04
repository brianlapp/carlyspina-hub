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
  
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem>
            <Link 
              to="/"
              className={`px-4 py-2 text-sage-600 hover:text-sage-900 transition-colors ${
                location.pathname === "/" ? "text-sage-900 font-medium" : ""
              }`}
            >
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger 
              className="text-sage-600 hover:text-sage-900 transition-colors data-[state=open]:text-sage-900"
            >
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute left-0">
              <div className="w-[250px] p-2 bg-white shadow-lg rounded-md">
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
          {navItems.slice(1).map((item) => (
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
        </NavigationMenuList>
      </NavigationMenu>
      <Button 
        className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
        onClick={() => window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank')}
      >
        Book Now
      </Button>
    </div>
  );
};