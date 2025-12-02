import heroImage from "@/assets/hero-model.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 items-center py-6 lg:py-12">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">
              Swapnil Jewellers
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 leading-tight">
              Where Every Ring And Necklace Tells Your Story
            </h1>
            <p className="text-sm font-body text-muted-foreground mb-4 max-w-md mx-auto lg:mx-0">
              Explore jewelry for a romantic union lifestyle.
            </p>
            <Button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-body font-medium">
              Shop Now
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Luxury jewellery model" 
              className="w-full h-auto rounded-lg shadow-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
