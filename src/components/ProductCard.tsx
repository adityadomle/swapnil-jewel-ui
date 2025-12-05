import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  weight: string;
  rating: number;
  image: string;
}

const ProductCard = ({ name, weight, rating, image }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg lg:rounded-xl overflow-hidden shadow-sm border border-border/50 cursor-pointer hover:shadow-md transition-shadow">
      <div className="aspect-square bg-beige p-1.5 lg:p-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain rounded"
          loading="lazy"
        />
      </div>
      <div className="p-1.5 lg:p-4 text-center bg-card">
        <h4 className="font-body font-medium text-foreground mb-0.5 lg:mb-2 text-[9px] lg:text-base leading-tight line-clamp-2">
          {name}
        </h4>
        <div className="flex items-center justify-center mb-0.5 lg:mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-2 h-2 lg:w-4 lg:h-4 ${i < rating ? 'fill-gold text-gold' : 'text-muted'}`}
            />
          ))}
        </div>
        <p className="text-[9px] lg:text-base font-body font-semibold text-gold">
          {weight}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
