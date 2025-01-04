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
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <nav className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 py-2 space-y-4">
              <div className="space-y-1">
                <NavigationItems 
                  items={navItems} 
                  currentPath={location.pathname} 
                  onClick={onClose} 
                />
              </div>
              <div className="pt-4 space-y-2">
                <div className="text-sm font-medium text-sage-900 px-2 py-1">
                  Services
                </div>
                <div className="space-y-1">
                  <NavigationItems 
                    items={services} 
                    currentPath={location.pathname} 
                    onClick={onClose} 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-sage-200 p-4">
            <Button 
              className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              onClick={() => {
                window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank');
                onClose();
              }}
            >
              Book Now
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};