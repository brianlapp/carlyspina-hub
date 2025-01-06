import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/f97eb233-41c9-4fa0-9dab-95dd06d2800e.png" 
        alt="Lotus" 
        className="h-8 w-auto"
      />
      <img 
        src="/lovable-uploads/71d1a665-a3a8-4537-ba90-4912adcaded2.png"
        alt="Carly Spina"
        className="h-12 w-auto"
      />
    </Link>
  );
};