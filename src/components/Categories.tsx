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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-beige rounded-lg overflow-hidden shadow-sm">
              <div className="h-80 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2">
                  {category.label}
                </p>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <Button variant="outline" className="bg-background text-foreground border-border font-body">
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
