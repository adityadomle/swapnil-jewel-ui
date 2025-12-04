import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-beige py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <h3 className="text-sm font-heading font-bold text-foreground mb-2">
              Swapnil Jewellers
            </h3>
            <p className="text-[9px] font-body text-muted-foreground mb-2">
              Your trusted destination for pure 22K gold jewellery.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="text-gold">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="text-gold">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-heading font-semibold text-foreground mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-[9px] font-body text-muted-foreground">Home</Link></li>
              <li><Link to="/shop" className="text-[9px] font-body text-muted-foreground">Shop</Link></li>
              <li><Link to="/about" className="text-[9px] font-body text-muted-foreground">About</Link></li>
              <li><Link to="/contact" className="text-[9px] font-body text-muted-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-heading font-semibold text-foreground mb-2">
              Categories
            </h3>
            <ul className="space-y-1">
              <li><Link to="/shop" className="text-[9px] font-body text-muted-foreground">Gold Rings</Link></li>
              <li><Link to="/shop" className="text-[9px] font-body text-muted-foreground">Gold Chains</Link></li>
              <li><Link to="/shop" className="text-[9px] font-body text-muted-foreground">Gold Bangles</Link></li>
              <li><Link to="/shop" className="text-[9px] font-body text-muted-foreground">Gold Earrings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-heading font-semibold text-foreground mb-2">
              Contact
            </h3>
            <ul className="space-y-1">
              <li className="flex items-start gap-1">
                <MapPin className="w-3 h-3 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-[9px] font-body text-muted-foreground">
                  Virsi, Taluka - Sakoli, Dist - Bhandara, India
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-gold flex-shrink-0" />
                <span className="text-[9px] font-body text-muted-foreground">+91 7796869904</span>
              </li>
              <li className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-gold flex-shrink-0" />
                <span className="text-[9px] font-body text-muted-foreground">info@swapniljewellers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-3 text-center">
          <p className="text-[8px] font-body text-muted-foreground">
            © 2025 Swapnil Jewellers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
