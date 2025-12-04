import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id?: string;
  name: string;
  weight: string;
  rating: number;
  image: string;
}

const ProductCard = ({ id, name, weight, rating, image }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: id || `${name}-${weight}`,
      name,
      weight,
      image,
    });
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border/50">
      <div className="aspect-square bg-beige p-1.5">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain rounded"
          loading="lazy"
        />
      </div>
      <div className="p-1.5 text-center bg-card">
        <h4 className="font-body font-medium text-foreground mb-0.5 text-[9px] leading-tight line-clamp-2">
          {name}
        </h4>
        <div className="flex items-center justify-center mb-0.5">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-2 h-2 ${i < rating ? 'fill-gold text-gold' : 'text-muted'}`}
            />
          ))}
        </div>
        <p className="text-[9px] font-body font-semibold text-gold mb-1">
          {weight}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-1 bg-gold/10 hover:bg-gold/20 text-foreground py-1 rounded text-[8px] font-body transition-colors"
        >
          <ShoppingCart className="w-2.5 h-2.5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
