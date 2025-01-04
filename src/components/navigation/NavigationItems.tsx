import { Link } from "react-router-dom";

interface NavigationItemsProps {
  items: Array<{ name: string; path: string }>;
  currentPath: string;
  onClick?: () => void;
}

export const NavigationItems = ({ items, currentPath, onClick }: NavigationItemsProps) => {
  return (
    <>
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`block w-full text-base px-2 py-2 rounded-md transition-colors ${
            currentPath === item.path 
              ? "bg-sage-50 text-sage-900 font-medium" 
              : "text-sage-600 hover:text-sage-900 hover:bg-sage-50"
          }`}
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};