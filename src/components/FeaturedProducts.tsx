import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Pure Gold Mangalsutra",
      weight: "6.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
    },
    {
      name: "Gold Jhumka Earrings",
      weight: "5.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
    },
    {
      name: "22K Gold Figaro Chain",
      weight: "12.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
    },
    {
      name: "Traditional Gold Choker",
      weight: "22.0 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400&q=80"
    },
    {
      name: "Gold Stud Earrings",
      weight: "2.4 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80"
    },
    {
      name: "Pure Gold Signet Ring",
      weight: "4.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80"
    },
    {
      name: "Gold Snake Chain",
      weight: "9.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80"
    },
    {
      name: "Traditional Bangles Set",
      weight: "28.0 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80"
    },
    {
      name: "Gold Box Chain Necklace",
      weight: "7.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
    },
    {
      name: "Pure Gold Cuff Bracelet",
      weight: "14.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80"
    }
  ];

  return (
    <section className="py-6 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
            Featured Gold Collection
          </h2>
          <p className="text-[10px] font-body text-muted-foreground max-w-xl mx-auto">
            Handcrafted Pure Gold Jewellery For Every Occasion
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {products.map((product, index) => (
            <ProductCard key={index} id={`featured-${index}`} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
