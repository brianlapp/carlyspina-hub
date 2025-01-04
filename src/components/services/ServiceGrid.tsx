import { ServiceCard } from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topServices.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-none md:max-w-[calc(66.666%-2rem)] lg:max-w-[calc(66.666%-1rem)] mx-auto">
        {bottomServices.map((service, index) => (
          <ServiceCard key={index + 3} {...service} index={index + 3} />
        ))}
      </div>
    </div>
  );
};