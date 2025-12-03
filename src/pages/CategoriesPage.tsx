import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import ringImage from "@/assets/category-ring.jpg";
import braceletImage from "@/assets/category-bracelet.jpg";
import necklaceImage from "@/assets/category-necklace.jpg";

const CategoriesPage = () => {
  const categories = [
    { title: "Gold Rings", description: "Handcrafted 22K gold rings for every occasion", image: ringImage, count: "8 Products" },
    { title: "Gold Bangles", description: "Traditional pure gold bangles and kadas", image: braceletImage, count: "12 Products" },
    { title: "Gold Chains", description: "Premium gold chains and necklaces", image: necklaceImage, count: "10 Products" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-4 bg-beige">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h1 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
            Pure Gold Collections
          </h1>
          <p className="text-[10px] font-body text-muted-foreground max-w-xl mx-auto">
            Explore our curated selection of 22K gold jewellery
          </p>
        </div>
      </section>

      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-3 gap-2">
            {categories.map((category, index) => (
              <Link to="/shop" key={index} className="bg-beige rounded-lg overflow-hidden shadow-sm">
                <div className="h-24 sm:h-32 lg:h-40 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-contain p-1" loading="lazy" />
                </div>
                <div className="p-2 text-center">
                  <h2 className="text-[10px] sm:text-xs font-heading font-semibold text-foreground mb-0.5">{category.title}</h2>
                  <p className="text-[8px] font-body text-muted-foreground mb-1 hidden sm:block">{category.description}</p>
                  <p className="text-[8px] font-body text-gold">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoriesPage;
