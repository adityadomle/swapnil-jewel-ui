import necklaceImage from "@/assets/promo-necklace.jpg";
import ringImage from "@/assets/promo-ring.jpg";
import { Link } from "react-router-dom";

const PromoBanners = () => {
  return (
    <section className="py-4 lg:py-16 bg-beige">
      <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 gap-2 lg:gap-8">
          <Link to="/shop" className="relative bg-card rounded-lg lg:rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 lg:p-8 flex flex-col justify-center">
                <p className="text-[8px] lg:text-sm font-body text-gold uppercase tracking-wider mb-0.5 lg:mb-2">
                  Pure Gold
                </p>
                <h3 className="text-[10px] sm:text-xs lg:text-2xl font-heading font-semibold text-foreground mb-1 lg:mb-4">
                  Gold Chain Collection
                </h3>
                <span className="text-[8px] lg:text-base font-body text-gold font-medium">
                  Shop Now →
                </span>
              </div>
              <div className="h-24 sm:h-28 lg:h-56">
                <img 
                  src={necklaceImage} 
                  alt="Gold chain"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>

          <Link to="/shop" className="relative bg-card rounded-lg lg:rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 lg:p-8 flex flex-col justify-center">
                <p className="text-[8px] lg:text-sm font-body text-gold uppercase tracking-wider mb-0.5 lg:mb-2">
                  22K Gold
                </p>
                <h3 className="text-[10px] sm:text-xs lg:text-2xl font-heading font-semibold text-foreground mb-1 lg:mb-4">
                  Wedding Ring Collection
                </h3>
                <span className="text-[8px] lg:text-base font-body text-gold font-medium">
                  Shop Now →
                </span>
              </div>
              <div className="h-24 sm:h-28 lg:h-56">
                <img 
                  src={ringImage} 
                  alt="Gold ring"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
