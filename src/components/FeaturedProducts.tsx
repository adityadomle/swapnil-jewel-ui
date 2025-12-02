import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "The Swank Ring The Shazard Gold Hoop Ring",
      weight: "2.1 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300"
    },
    {
      name: "Beautiful Scrolled Frame Tri-ring Gold Earring",
      weight: "4.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300"
    },
    {
      name: "Beautiful Enameled Teardrop Earring Gold",
      weight: "3.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=300"
    },
    {
      name: "Two Tone Accord Engagement Ring Gold",
      weight: "2.9 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=300"
    },
    {
      name: "Women Gold Necklace",
      weight: "5.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300"
    },
    {
      name: "Gold Ring For Women",
      weight: "2.7 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300"
    },
    {
      name: "Vintage Gold Pendant",
      weight: "3.4 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300"
    },
    {
      name: "Designer Gold Bracelet",
      weight: "6.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300"
    },
    {
      name: "Luxury Gold Chain",
      weight: "7.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300"
    },
    {
      name: "Classic Gold Bangle",
      weight: "5.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300"
    }
  ];

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-1">
            Featured Products
          </h2>
          <p className="text-xs font-body text-muted-foreground max-w-2xl mx-auto">
            Elevate Your Style With Jewelry That Speaks Your Unique Story
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
