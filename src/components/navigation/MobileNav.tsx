import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationItems } from "./NavigationItems";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          <div className="flex flex-col gap-6 p-6">
            <nav className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <NavigationItems 
                  items={navItems} 
                  currentPath={location.pathname} 
                  onClick={onClose} 
                />
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-sage-900 px-2">
                  Services
                </div>
                <div className="flex flex-col gap-2">
                  <NavigationItems 
                    items={services} 
                    currentPath={location.pathname} 
                    onClick={onClose} 
                  />
                </div>
              </div>
            </nav>
            <Button 
              className="w-full bg-custom-sage text-white hover:bg-custom-sage/90 transition-colors"
              onClick={() => {
                window.open('https://windsorhealingandwellness.square.site/s/appointments', '_blank');
                onClose();
              }}
            >
              Book Now
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};