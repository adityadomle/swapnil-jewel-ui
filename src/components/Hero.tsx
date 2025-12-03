import heroImage from "@/assets/hero-model.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-3 items-center py-4 lg:py-8">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-[9px] font-body text-gold uppercase tracking-wider mb-1">
              Swapnil Jewellers
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2 leading-tight">
              Pure Gold Jewellery
              <span className="block text-gold">For Every Occasion</span>
            </h1>
            <p className="text-[10px] font-body text-muted-foreground mb-3 max-w-sm mx-auto lg:mx-0">
              Discover handcrafted 22K gold rings, chains, bangles & more
            </p>
            <Link to="/shop">
              <Button className="bg-gold text-foreground px-4 py-2 text-[10px] font-body font-medium rounded-lg shadow-sm">
                Shop Collection
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Pure Gold Jewellery Collection" 
              className="w-full h-auto rounded-lg shadow-sm object-contain max-h-56 lg:max-h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
