import ringImage from "@/assets/category-ring.jpg";
import braceletImage from "@/assets/category-bracelet.jpg";
import necklaceImage from "@/assets/category-necklace.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Gold Rings",
      image: ringImage,
      label: "Handcrafted"
    },
    {
      title: "Gold Bangles",
      image: braceletImage,
      label: "Traditional"
    },
    {
      title: "Gold Chains",
      image: necklaceImage,
      label: "Premium"
    }
  ];

  return (
    <section className="py-4 lg:py-16 bg-background">
      <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16">
        <div className="text-center mb-3 lg:mb-10">
          <h2 className="text-lg sm:text-xl lg:text-4xl font-heading font-bold text-foreground mb-1 lg:mb-3">
            Shop By Category
          </h2>
          <p className="text-[10px] lg:text-base font-body text-muted-foreground">
            Browse Our Pure Gold Collections
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          {categories.map((category, index) => (
            <Link to="/shop" key={index} className="bg-beige rounded-lg lg:rounded-2xl overflow-hidden shadow-sm">
              <div className="h-24 sm:h-32 lg:h-72 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-contain p-1 lg:p-4"
                  loading="lazy"
                />
              </div>
              <div className="p-2 lg:p-6 text-center">
                <p className="text-[8px] lg:text-sm font-body text-gold uppercase tracking-wider mb-0.5 lg:mb-2">
                  {category.label}
                </p>
                <h3 className="text-[10px] sm:text-xs lg:text-xl font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
