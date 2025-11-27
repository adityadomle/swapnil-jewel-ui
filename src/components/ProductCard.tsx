import { Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  weight: string;
  rating: number;
  image: string;
}

const ProductCard = ({ name, weight, rating, image }: ProductCardProps) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border">
      <div className="aspect-square bg-beige p-2">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-3 text-center">
        <h4 className="font-body font-medium text-foreground mb-1.5 text-xs leading-tight">
          {name}
        </h4>
        <div className="flex items-center justify-center mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-2.5 h-2.5 ${i < rating ? 'fill-gold text-gold' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
        <p className="text-xs font-body font-semibold text-gold">
          {weight}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
