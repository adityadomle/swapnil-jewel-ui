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
      <div className="aspect-square bg-beige p-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="font-body font-medium text-foreground mb-2 text-sm">
          {name}
        </h4>
        <div className="flex items-center justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < rating ? 'fill-rose-gold text-rose-gold' : 'text-muted-foreground'}`}
            />
          ))}
        </div>
        <p className="text-sm font-body font-semibold text-rose-gold">
          {weight}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
