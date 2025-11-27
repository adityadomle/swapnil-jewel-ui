import necklaceImage from "@/assets/promo-necklace.jpg";
import ringImage from "@/assets/promo-ring.jpg";
import { Button } from "@/components/ui/button";

const PromoBanners = () => {
  return (
    <section className="py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative bg-background rounded-lg overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-8 flex flex-col justify-center">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">
                  Stylish Necklace
                </p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Women's Gold Necklace
                </h3>
                <Button className="bg-primary text-primary-foreground w-fit font-body">
                  Shop Now
                </Button>
              </div>
              <div className="h-64 md:h-full">
                <img 
                  src={necklaceImage} 
                  alt="Gold necklace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-background rounded-lg overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-8 flex flex-col justify-center">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">
                  Best Wedding Ring
                </p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Gold Ring For Women
                </h3>
                <Button className="bg-primary text-primary-foreground w-fit font-body">
                  Shop Now
                </Button>
              </div>
              <div className="h-64 md:h-full">
                <img 
                  src={ringImage} 
                  alt="Gold ring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
