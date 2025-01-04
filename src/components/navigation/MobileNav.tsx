import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationItems } from "./NavigationItems";

interface MobileNavProps {
  services: Array<{ name: string; path: string }>;
  navItems: Array<{ name: string; path: string }>;
  onClose: () => void;
}

export const MobileNav = ({ services, navItems, onClose }: MobileNavProps) => {
  const location = useLocation();
  
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden absolute left-0">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <NavigationItems 
            items={navItems} 
            currentPath={location.pathname} 
            onClick={onClose} 
          />
          <div className="space-y-2">
            <div className="text-sm font-medium text-sage-900 px-2 py-1">
              Services
            </div>
            <NavigationItems 
              items={services} 
              currentPath={location.pathname} 
              onClick={onClose} 
            />
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
  );
};