import heroImage from "@/assets/hero-model.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-beige overflow-hidden">
      <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-12 items-center py-4 lg:py-16">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-[9px] lg:text-sm font-body text-gold uppercase tracking-wider mb-1 lg:mb-3">
              Swapnil Jewellers
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-2 lg:mb-6 leading-tight">
              Pure Gold Jewellery
              <span className="block text-gold">For Every Occasion</span>
            </h1>
            <p className="text-[10px] lg:text-base font-body text-muted-foreground mb-3 lg:mb-8 max-w-sm lg:max-w-lg mx-auto lg:mx-0">
              Discover handcrafted 22K gold rings, chains, bangles & more
            </p>
            <Link to="/shop">
              <Button className="bg-gold text-foreground px-4 lg:px-8 py-2 lg:py-3 text-[10px] lg:text-base font-body font-medium rounded-lg shadow-sm">
                Shop Collection
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Pure Gold Jewellery Collection" 
              className="w-full h-auto rounded-lg shadow-sm object-contain max-h-56 lg:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
