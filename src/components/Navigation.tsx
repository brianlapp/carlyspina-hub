import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-sage-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-semibold text-earth-900">
            CarlySpina.com
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <Link to="/" className={cn("px-4 py-2 text-earth-600 hover:text-earth-900 transition-colors")}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn("px-4 py-2 text-earth-600 hover:text-earth-900 transition-colors")}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/services" className={cn("px-4 py-2 text-earth-600 hover:text-earth-900 transition-colors")}>
                  Services
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/testimonials" className={cn("px-4 py-2 text-earth-600 hover:text-earth-900 transition-colors")}>
                  Testimonials
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={cn("px-4 py-2 text-earth-600 hover:text-earth-900 transition-colors")}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Navigation;