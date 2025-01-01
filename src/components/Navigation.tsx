import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold text-sage-900 mb-4 md:mb-0">CarlySpina.com</h1>
          <div className="flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {["Home", "About", "Services", "Testimonials", "Contact"].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className="px-4 py-2 text-sage-600 hover:text-sage-900 transition-colors">
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button 
              className="bg-sage-50 text-sage-900 hover:bg-sage-100"
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