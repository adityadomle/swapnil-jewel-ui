import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const NewArrivals = () => {
  const newArrivals = products.slice(10, 18);

  return (
    <section className="py-6 bg-beige">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
            New Arrivals
          </h2>
          <p className="text-[10px] font-body text-muted-foreground max-w-xl mx-auto">
            Discover Our Latest Pure Gold Collection
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {newArrivals.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
