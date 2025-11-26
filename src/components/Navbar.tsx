import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-heading font-semibold text-foreground">Swapnil Jewellers</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground font-body font-medium">Home</Link>
            <Link to="/shop" className="text-foreground font-body font-medium">Shop</Link>
            <Link to="/categories" className="text-foreground font-body font-medium">Categories</Link>
            <Link to="/about" className="text-foreground font-body font-medium">About</Link>
            <a href="#" className="text-foreground font-body font-medium">Contact</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block text-foreground font-body font-medium py-2">Home</Link>
            <Link to="/shop" className="block text-foreground font-body font-medium py-2">Shop</Link>
            <Link to="/categories" className="block text-foreground font-body font-medium py-2">Categories</Link>
            <Link to="/about" className="block text-foreground font-body font-medium py-2">About</Link>
            <a href="#" className="block text-foreground font-body font-medium py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
