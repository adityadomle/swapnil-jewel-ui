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
      name: "Beautiful Scrolled Frame Tri-ring Rose Gold Earring",
      weight: "4.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300"
    },
    {
      name: "Beautiful Enameled Teardrop Earring Rose Gold",
      weight: "3.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=300"
    },
    {
      name: "Two Tone Accord Engagement Ring Rose Gold",
      weight: "2.9 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=300"
    },
    {
      name: "Women Rose Gold Necklace",
      weight: "5.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300"
    },
    {
      name: "Rose Gold Ring For Women",
      weight: "2.7 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-base font-body text-muted-foreground max-w-2xl mx-auto">
            Elevate Your Style With Jewelry That Speaks Your Unique Story
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
