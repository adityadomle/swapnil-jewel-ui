import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-sm sm:text-base font-heading font-bold text-foreground">
              Swapnil <span className="text-gold">Jewellers</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/" className="text-[10px] text-foreground font-body font-medium">Home</Link>
            <Link to="/shop" className="text-[10px] text-foreground font-body font-medium">Shop</Link>
            <Link to="/categories" className="text-[10px] text-foreground font-body font-medium">Categories</Link>
            <Link to="/about" className="text-[10px] text-foreground font-body font-medium">About</Link>
            <Link to="/contact" className="text-[10px] text-foreground font-body font-medium">Contact</Link>
          </div>

          <button 
            className="md:hidden p-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 text-foreground" />
            ) : (
              <Menu className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-2 space-y-1 border-t border-border/30 pt-2">
            <Link 
              to="/" 
              className="block text-[10px] text-foreground font-body font-medium py-1.5 px-2 rounded bg-beige/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="block text-[10px] text-foreground font-body font-medium py-1.5 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className="block text-[10px] text-foreground font-body font-medium py-1.5 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="block text-[10px] text-foreground font-body font-medium py-1.5 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-[10px] text-foreground font-body font-medium py-1.5 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
