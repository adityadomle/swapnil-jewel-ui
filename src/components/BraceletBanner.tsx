import braceletImage from "@/assets/bracelet-banner.jpg";
import { Button } from "@/components/ui/button";

const BraceletBanner = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-beige rounded-lg overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">
                Diamond Bracelet
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Sparkling Rose Gold Diamond Bracelet Luxury
              </h2>
              <Button className="bg-primary text-primary-foreground font-body px-8">
                Shop Now
              </Button>
            </div>
            <div className="h-80 lg:h-full">
              <img 
                src={braceletImage} 
                alt="Rose gold diamond bracelet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraceletBanner;
