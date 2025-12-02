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
      <div className="p-2 text-center">
        <h4 className="font-body font-medium text-foreground mb-1 text-[10px] leading-tight">
          {name}
        </h4>
        <div className="flex items-center justify-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-2 h-2 ${i < rating ? 'fill-gold text-gold' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
        <p className="text-[10px] font-body font-semibold text-gold">
          {weight}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
