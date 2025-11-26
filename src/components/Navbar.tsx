import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-heading font-semibold text-foreground">Pretti</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground font-body font-medium">Home</a>
            <a href="#" className="text-foreground font-body font-medium">Shop</a>
            <a href="#" className="text-foreground font-body font-medium">Categories</a>
            <a href="#" className="text-foreground font-body font-medium">About</a>
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
            <a href="#" className="block text-foreground font-body font-medium py-2">Home</a>
            <a href="#" className="block text-foreground font-body font-medium py-2">Shop</a>
            <a href="#" className="block text-foreground font-body font-medium py-2">Categories</a>
            <a href="#" className="block text-foreground font-body font-medium py-2">About</a>
            <a href="#" className="block text-foreground font-body font-medium py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
