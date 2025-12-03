import braceletImage from "@/assets/bracelet-banner.jpg";
import { Link } from "react-router-dom";

const BraceletBanner = () => {
  return (
    <section className="py-4 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="relative bg-beige rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="p-2 sm:p-3">
              <p className="text-[8px] font-body text-gold uppercase tracking-wider mb-0.5">
                Pure Gold
              </p>
              <h2 className="text-xs sm:text-sm lg:text-base font-heading font-bold text-foreground mb-1">
                22K Gold Bangle Collection
              </h2>
              <p className="text-[9px] font-body text-muted-foreground mb-2 hidden sm:block">
                Traditional handcrafted designs
              </p>
              <Link to="/shop" className="text-[9px] font-body text-gold font-medium">
                Shop Now →
              </Link>
            </div>
            <div className="h-32 sm:h-40 lg:h-48">
              <img 
                src={braceletImage} 
                alt="Pure gold bangle"
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraceletBanner;
