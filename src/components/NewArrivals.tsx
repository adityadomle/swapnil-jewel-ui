import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const products = [
    {
      name: "Pure Gold Traditional Ring",
      weight: "2.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
    },
    {
      name: "22K Gold Wedding Band",
      weight: "3.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400&q=80"
    },
    {
      name: "Gold Rope Chain Necklace",
      weight: "8.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
    },
    {
      name: "Classic Gold Bangle Set",
      weight: "12.0 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80"
    },
    {
      name: "Pure Gold Hoop Earrings",
      weight: "4.1 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
    },
    {
      name: "22K Gold Cuban Link Chain",
      weight: "15.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80"
    },
    {
      name: "Gold Temple Pendant",
      weight: "5.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
    },
    {
      name: "Traditional Gold Kada",
      weight: "18.0 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80"
    }
  ];

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
          {products.map((product, index) => (
            <ProductCard key={index} id={`new-arrival-${index}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
