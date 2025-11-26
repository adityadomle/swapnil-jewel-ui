import { Facebook, Twitter, Instagram, Youtube, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-beige py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">
              About The Store
            </h3>
            <p className="text-sm font-body text-muted-foreground mb-4">
              Welcome to our store, where you guide the process art studio dedicated to bringing imagination products and make your event happy and luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm font-body text-muted-foreground">Home</Link></li>
              <li><Link to="/shop" className="text-sm font-body text-muted-foreground">Shop</Link></li>
              <li><Link to="/about" className="text-sm font-body text-muted-foreground">About us</Link></li>
              <li><Link to="/categories" className="text-sm font-body text-muted-foreground">Categories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm font-body text-muted-foreground">FAQ</a></li>
              <li><a href="#" className="text-sm font-body text-muted-foreground">Refund Policy</a></li>
              <li><a href="#" className="text-sm font-body text-muted-foreground">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm font-body text-muted-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-sm font-body text-muted-foreground">Wishlist</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-sm font-body text-muted-foreground">
                20-3, Ring Rd, Malharganj, INDORE
              </li>
              <li className="text-sm font-body text-muted-foreground">
                +91 7314051261
              </li>
              <li className="text-sm font-body text-muted-foreground">
                contact@prettimesmerizingthings.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm font-body text-muted-foreground">
            © 2025 Swapnil Jewellers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
