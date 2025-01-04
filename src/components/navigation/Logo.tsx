import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl font-semibold text-sage-900">
      <img 
        src="/lovable-uploads/51d316bb-a400-4319-953f-ceb5c5a653da.png" 
        alt="Lotus" 
        className="h-8 w-auto"
      />
      <span>CarlySpina.com</span>
    </Link>
  );
};