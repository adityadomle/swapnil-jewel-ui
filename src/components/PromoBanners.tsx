import necklaceImage from "@/assets/promo-necklace.jpg";
import ringImage from "@/assets/promo-ring.jpg";
import { Link } from "react-router-dom";

const PromoBanners = () => {
  return (
    <section className="py-4 bg-beige">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-2">
          <Link to="/shop" className="relative bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 flex flex-col justify-center">
                <p className="text-[8px] font-body text-gold uppercase tracking-wider mb-0.5">
                  Pure Gold
                </p>
                <h3 className="text-[10px] sm:text-xs font-heading font-semibold text-foreground mb-1">
                  Gold Chain Collection
                </h3>
                <span className="text-[8px] font-body text-gold font-medium">
                  Shop Now →
                </span>
              </div>
              <div className="h-24 sm:h-28">
                <img 
                  src={necklaceImage} 
                  alt="Gold chain"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>

          <Link to="/shop" className="relative bg-card rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 flex flex-col justify-center">
                <p className="text-[8px] font-body text-gold uppercase tracking-wider mb-0.5">
                  22K Gold
                </p>
                <h3 className="text-[10px] sm:text-xs font-heading font-semibold text-foreground mb-1">
                  Wedding Ring Collection
                </h3>
                <span className="text-[8px] font-body text-gold font-medium">
                  Shop Now →
                </span>
              </div>
              <div className="h-24 sm:h-28">
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
