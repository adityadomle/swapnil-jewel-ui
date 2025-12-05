import braceletImage from "@/assets/bracelet-banner.jpg";
import { Link } from "react-router-dom";

const BraceletBanner = () => {
  return (
    <section className="py-4 lg:py-16 bg-background">
      <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16">
        <div className="relative bg-beige rounded-lg lg:rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 gap-2 lg:gap-8 items-center">
            <div className="p-2 sm:p-3 lg:p-10">
              <p className="text-[8px] lg:text-sm font-body text-gold uppercase tracking-wider mb-0.5 lg:mb-3">
                Pure Gold
              </p>
              <h2 className="text-xs sm:text-sm lg:text-3xl font-heading font-bold text-foreground mb-1 lg:mb-4">
                22K Gold Bangle Collection
              </h2>
              <p className="text-[9px] lg:text-base font-body text-muted-foreground mb-2 lg:mb-6 hidden sm:block">
                Traditional handcrafted designs
              </p>
              <Link to="/shop" className="text-[9px] lg:text-base font-body text-gold font-medium">
                Shop Now →
              </Link>
            </div>
            <div className="h-32 sm:h-40 lg:h-80">
              <img 
                src={braceletImage} 
                alt="Pure gold bangle"
                className="w-full h-full object-contain p-2 lg:p-8"
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
