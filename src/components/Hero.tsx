import heroImage from "@/assets/hero-model.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-4">
              Pretti Mesmerizing Things
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Where Every Ring And Necklace Tells Your Story
            </h1>
            <p className="text-base font-body text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Explore jewelry for a romantic union lifestyle.
            </p>
            <Button className="bg-primary text-primary-foreground px-8 py-6 font-body font-medium">
              Shop Now
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Luxury jewellery model" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
