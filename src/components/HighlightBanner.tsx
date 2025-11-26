import highlightImage from "@/assets/highlight-model.jpg";
import { Button } from "@/components/ui/button";

const HighlightBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-beige rounded-lg overflow-hidden shadow-lg">
          <div className="order-2 lg:order-1">
            <img 
              src={highlightImage} 
              alt="Blue necklace collection"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2 p-8 lg:p-12">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">
              This Week's Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Drop Cut Blue Necklace With Earrings Set
            </h2>
            <p className="text-base font-body text-muted-foreground mb-6">
              Adorningly Products For The Upscale Urban Lifestyle
            </p>
            <Button className="bg-primary text-primary-foreground font-body px-8">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightBanner;
