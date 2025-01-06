import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/51d316bb-a400-4319-953f-ceb5c5a653da.png" 
        alt="Lotus" 
        className="h-8 w-auto"
      />
      <img 
        src="/lovable-uploads/71d1a665-a3a8-4537-ba90-4912adcaded2.png"
        alt="Carly Spina"
        className="h-6 w-auto"
      />
    </Link>
  );
};