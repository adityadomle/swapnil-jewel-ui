import ringImage from "@/assets/category-ring.jpg";
import braceletImage from "@/assets/category-bracelet.jpg";
import necklaceImage from "@/assets/category-necklace.jpg";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const categories = [
    {
      title: "Ring",
      image: ringImage,
      label: "Seamless Crafts"
    },
    {
      title: "Bracelet",
      image: braceletImage,
      label: "Premium Jewellery"
    },
    {
      title: "Necklace",
      image: necklaceImage,
      label: "Diamond's Spotlight"
    }
  ];

  return (
    <section className="py-8 bg-background">
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
              <div className="p-4 text-center">
                <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
                  {category.label}
                </p>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <Button variant="outline" className="bg-background text-foreground border-border font-body text-xs px-4 py-2">
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
