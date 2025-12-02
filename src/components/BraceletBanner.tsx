import braceletImage from "@/assets/bracelet-banner.jpg";
import { Button } from "@/components/ui/button";

const BraceletBanner = () => {
  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-beige rounded-lg overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="p-4 lg:p-6">
              <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
                Diamond Bracelet
              </p>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                Sparkling Gold Diamond Bracelet Luxury
              </h2>
              <Button className="bg-primary text-primary-foreground font-body text-xs px-6 py-2">
                Shop Now
              </Button>
            </div>
            <div className="h-48 lg:h-64">
              <img 
                src={braceletImage} 
                alt="Gold diamond bracelet"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraceletBanner;
