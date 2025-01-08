import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/carly-spina-logo.png" 
        alt="Carly Spina"
        className="h-16 w-auto"
      />
    </Link>
  );
};