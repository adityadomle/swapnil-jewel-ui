import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { products } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory;
    
    const weight = parseFloat(product.weight);
    let priceMatch = true;
    if (selectedPriceRange === "0-5") {
      priceMatch = weight <= 5;
    } else if (selectedPriceRange === "5-10") {
      priceMatch = weight > 5 && weight <= 10;
    } else if (selectedPriceRange === "10-20") {
      priceMatch = weight > 10 && weight <= 20;
    } else if (selectedPriceRange === "20+") {
      priceMatch = weight > 20;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-4 lg:py-12 bg-beige">
        <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16 text-center">
          <h1 className="text-lg sm:text-xl lg:text-4xl font-heading font-bold text-foreground mb-1 lg:mb-3">
            Pure Gold Collection
          </h1>
          <p className="text-[10px] lg:text-base font-body text-muted-foreground">
            Handcrafted 22K Gold Jewellery
          </p>
        </div>
      </section>

      <section className="py-4 lg:py-12 bg-background">
        <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="bg-beige rounded-lg lg:rounded-xl p-2 lg:p-6 sticky top-16 lg:top-20">
                <h2 className="text-xs lg:text-xl font-heading font-semibold text-foreground mb-2 lg:mb-4">
                  Filters
                </h2>
                
                <div className="mb-3 lg:mb-6">
                  <h3 className="text-[9px] lg:text-sm font-body font-semibold text-foreground uppercase tracking-wider mb-1 lg:mb-3">
                    Category
                  </h3>
                  <div className="space-y-0.5 lg:space-y-1">
                    {[
                      { value: "all", label: "All Products" },
                      { value: "rings", label: "Rings" },
                      { value: "chains", label: "Chains" },
                      { value: "earrings", label: "Earrings" },
                      { value: "bangles", label: "Bangles" },
                      { value: "bracelets", label: "Bracelets" },
                      { value: "pendants", label: "Pendants" },
                      { value: "necklaces", label: "Necklaces" },
                    ].map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`block w-full text-left px-2 lg:px-4 py-0.5 lg:py-2 rounded lg:rounded-lg font-body text-[9px] lg:text-sm ${
                          selectedCategory === cat.value
                            ? "bg-gold/20 text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[9px] lg:text-sm font-body font-semibold text-foreground uppercase tracking-wider mb-1 lg:mb-3">
                    Weight Range
                  </h3>
                  <div className="space-y-0.5 lg:space-y-1">
                    {[
                      { value: "all", label: "All Weights" },
                      { value: "0-5", label: "Under 5 gm" },
                      { value: "5-10", label: "5 - 10 gm" },
                      { value: "10-20", label: "10 - 20 gm" },
                      { value: "20+", label: "Above 20 gm" },
                    ].map(range => (
                      <button
                        key={range.value}
                        onClick={() => setSelectedPriceRange(range.value)}
                        className={`block w-full text-left px-2 lg:px-4 py-0.5 lg:py-2 rounded lg:rounded-lg font-body text-[9px] lg:text-sm ${
                          selectedPriceRange === range.value
                            ? "bg-gold/20 text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {(selectedCategory !== "all" || selectedPriceRange !== "all") && (
                  <Button
                    variant="outline"
                    className="w-full mt-2 lg:mt-4 bg-background text-foreground border-border font-body text-[9px] lg:text-sm h-6 lg:h-10"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedPriceRange("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-[9px] lg:text-sm font-body text-muted-foreground mb-2 lg:mb-4">
                Showing {filteredProducts.length} products
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <ProductCard
                      name={product.name}
                      weight={product.weight}
                      rating={product.rating}
                      image={product.image}
                    />
                  </Link>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-6 lg:py-16">
                  <p className="text-[10px] lg:text-base font-body text-muted-foreground mb-2 lg:mb-4">
                    No products found
                  </p>
                  <Button
                    variant="outline"
                    className="bg-background text-foreground border-border font-body text-[9px] lg:text-sm h-6 lg:h-10"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedPriceRange("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Shop;
