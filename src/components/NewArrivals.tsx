import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const products = [
    {
      name: "Real Diamond Jewellery Gem Studded Gold Ring",
      weight: "2.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300"
    },
    {
      name: "The Trendy Gold With Diamond Ring",
      weight: "3.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300"
    },
    {
      name: "Exotic Ethnicities Fancy Halo Gold Ring",
      weight: "2.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=300"
    },
    {
      name: "Grand Promise Diamond Gold Ring",
      weight: "3.5 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300"
    },
    {
      name: "Elegant Gold Band Ring",
      weight: "2.2 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1614179689702-355944cd57d4?w=300"
    },
    {
      name: "Classic Gold Wedding Ring",
      weight: "4.1 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300"
    },
    {
      name: "Modern Gold Statement Ring",
      weight: "3.8 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300"
    },
    {
      name: "Delicate Gold Pearl Ring",
      weight: "2.9 gm",
      rating: 5,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=300"
    }
  ];

  return (
    <section className="py-12 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
            New Arrival
          </h2>
          <p className="text-sm font-body text-muted-foreground max-w-2xl mx-auto">
            Explore The Mesmerizing Collection Of New Line Of Elegant Gold Rings For Women
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
