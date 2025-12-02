import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ringImage from "@/assets/category-ring.jpg";
import braceletImage from "@/assets/category-bracelet.jpg";
import necklaceImage from "@/assets/category-necklace.jpg";

const CategoriesPage = () => {
  const categories = [
    {
      title: "Rings",
      description: "Discover our exquisite collection of handcrafted rings, from delicate bands to statement pieces adorned with precious stones.",
      image: ringImage,
      count: "24 Products"
    },
    {
      title: "Bracelets",
      description: "Elegant bracelets that grace your wrist with timeless beauty, crafted with precision and adorned with the finest materials.",
      image: braceletImage,
      count: "18 Products"
    },
    {
      title: "Necklaces",
      description: "From classic chains to elaborate designs, our necklaces are the perfect centerpiece for any occasion.",
      image: necklaceImage,
      count: "32 Products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-6 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Our Collections
          </h1>
          <p className="text-sm font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of fine jewellery, each piece telling its own unique story of elegance and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-beige rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-heading font-semibold text-foreground mb-1">
                    {category.title}
                  </h2>
                  <p className="text-xs font-body text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <p className="text-[10px] font-body text-gold uppercase tracking-wider mb-3">
                    {category.count}
                  </p>
                  <Button variant="outline" className="w-full bg-background text-foreground border-border font-body text-xs h-7">
                    View Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
            Crafted With Precision
          </h2>
          <p className="text-xs font-body text-muted-foreground max-w-3xl mx-auto mb-4">
            Every piece in our collection is meticulously crafted by skilled artisans who bring decades of experience to their work. We use only the finest materials, ensuring that each item meets our exacting standards of quality and beauty.
          </p>
          <Button variant="outline" className="bg-background text-foreground border-border font-body text-xs h-7 px-4">
            Explore All Products
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
