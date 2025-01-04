import { ServiceCard } from "./ServiceCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface Service {
  title: string;
  description: string;
  image: string;
  path: string;
}

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            index={index}
            {...service}
            delay={isMobile ? 0 : index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};