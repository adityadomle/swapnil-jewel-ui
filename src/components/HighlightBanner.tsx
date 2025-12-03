import highlightImage from "@/assets/highlight-model.jpg";
import { Link } from "react-router-dom";

const HighlightBanner = () => {
  return (
    <section className="py-4 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-2 items-center bg-beige rounded-lg overflow-hidden shadow-sm">
          <div className="h-32 sm:h-40 lg:h-48">
            <img 
              src={highlightImage} 
              alt="Pure gold jewellery collection"
              className="w-full h-full object-contain p-2"
              loading="lazy"
            />
          </div>
          <div className="p-2 sm:p-3">
            <p className="text-[8px] font-body text-gold uppercase tracking-wider mb-0.5">
              This Week's Highlight
            </p>
            <h2 className="text-xs sm:text-sm font-heading font-bold text-foreground mb-1">
              Pure Gold Bridal Set
            </h2>
            <p className="text-[9px] font-body text-muted-foreground mb-2">
              Handcrafted 22K Gold Collection
            </p>
            <Link to="/shop" className="text-[9px] font-body text-gold font-medium">
              View Collection →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightBanner;
