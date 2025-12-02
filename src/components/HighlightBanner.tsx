import highlightImage from "@/assets/highlight-model.jpg";
import { Button } from "@/components/ui/button";

const HighlightBanner = () => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 items-center bg-beige rounded-lg overflow-hidden shadow-sm">
          <div className="order-2 lg:order-1">
            <img 
              src={highlightImage} 
              alt="Blue necklace collection"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="order-1 lg:order-2 p-4 lg:p-6">
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
              This Week's Highlights
            </p>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
              Drop Cut Blue Necklace With Earrings Set
            </h2>
            <p className="text-sm font-body text-muted-foreground mb-3">
              Adorningly Products For The Upscale Urban Lifestyle
            </p>
            <Button className="bg-primary text-primary-foreground font-body text-xs px-6 py-2">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightBanner;
