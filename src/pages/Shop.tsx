import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  const products = [
    { name: "Pure Gold Traditional Ring", category: "ring", weight: 2.5, rating: 5, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
    { name: "22K Gold Wedding Band", category: "ring", weight: 3.2, rating: 5, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400&q=80" },
    { name: "Gold Signet Ring", category: "ring", weight: 4.8, rating: 5, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80" },
    { name: "Classic Gold Band", category: "ring", weight: 2.8, rating: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
    { name: "Gold Rope Chain", category: "chain", weight: 8.5, rating: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { name: "22K Cuban Link Chain", category: "chain", weight: 15.8, rating: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
    { name: "Gold Figaro Chain", category: "chain", weight: 12.5, rating: 5, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
    { name: "Snake Chain Necklace", category: "chain", weight: 9.2, rating: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { name: "Pure Gold Hoop Earrings", category: "earring", weight: 4.1, rating: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { name: "Gold Jhumka Earrings", category: "earring", weight: 5.8, rating: 5, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80" },
    { name: "Gold Stud Earrings", category: "earring", weight: 2.4, rating: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
    { name: "Traditional Gold Earrings", category: "earring", weight: 6.2, rating: 5, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80" },
    { name: "Gold Bangle Set", category: "bangle", weight: 12.0, rating: 5, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80" },
    { name: "Traditional Bangles", category: "bangle", weight: 28.0, rating: 5, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80" },
    { name: "Gold Kada Bangle", category: "bangle", weight: 18.0, rating: 5, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80" },
    { name: "Slim Gold Bangles", category: "bangle", weight: 8.5, rating: 5, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80" },
    { name: "Gold Cuff Bracelet", category: "bracelet", weight: 14.2, rating: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
    { name: "Gold Link Bracelet", category: "bracelet", weight: 10.5, rating: 5, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80" },
    { name: "Pure Gold Tennis Bracelet", category: "bracelet", weight: 16.8, rating: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
    { name: "Traditional Gold Bracelet", category: "bracelet", weight: 11.2, rating: 5, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&q=80" },
    { name: "Gold Temple Pendant", category: "pendant", weight: 5.5, rating: 5, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
    { name: "Pure Gold Locket", category: "pendant", weight: 4.2, rating: 5, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
    { name: "Gold Om Pendant", category: "pendant", weight: 3.8, rating: 5, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
    { name: "Traditional Gold Pendant", category: "pendant", weight: 6.5, rating: 5, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
    { name: "Gold Mangalsutra", category: "necklace", weight: 6.2, rating: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { name: "Traditional Gold Choker", category: "necklace", weight: 22.0, rating: 5, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=400&q=80" },
    { name: "Gold Box Chain Necklace", category: "necklace", weight: 7.5, rating: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
    { name: "Pure Gold Statement Necklace", category: "necklace", weight: 32.0, rating: 5, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange === "0-5") {
      priceMatch = product.weight <= 5;
    } else if (selectedPriceRange === "5-10") {
      priceMatch = product.weight > 5 && product.weight <= 10;
    } else if (selectedPriceRange === "10-20") {
      priceMatch = product.weight > 10 && product.weight <= 20;
    } else if (selectedPriceRange === "20+") {
      priceMatch = product.weight > 20;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-4 bg-beige">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h1 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
            Pure Gold Collection
          </h1>
          <p className="text-[10px] font-body text-muted-foreground">
            Handcrafted 22K Gold Jewellery
          </p>
        </div>
      </section>

      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="lg:col-span-1">
              <div className="bg-beige rounded-lg p-2 sticky top-16">
                <h2 className="text-xs font-heading font-semibold text-foreground mb-2">
                  Filters
                </h2>
                
                <div className="mb-3">
                  <h3 className="text-[9px] font-body font-semibold text-foreground uppercase tracking-wider mb-1">
                    Category
                  </h3>
                  <div className="space-y-0.5">
                    {[
                      { value: "all", label: "All Products" },
                      { value: "ring", label: "Rings" },
                      { value: "chain", label: "Chains" },
                      { value: "earring", label: "Earrings" },
                      { value: "bangle", label: "Bangles" },
                      { value: "bracelet", label: "Bracelets" },
                      { value: "pendant", label: "Pendants" },
                      { value: "necklace", label: "Necklaces" },
                    ].map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`block w-full text-left px-2 py-0.5 rounded font-body text-[9px] ${
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
                  <h3 className="text-[9px] font-body font-semibold text-foreground uppercase tracking-wider mb-1">
                    Weight Range
                  </h3>
                  <div className="space-y-0.5">
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
                        className={`block w-full text-left px-2 py-0.5 rounded font-body text-[9px] ${
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
                    className="w-full mt-2 bg-background text-foreground border-border font-body text-[9px] h-6"
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
              <p className="text-[9px] font-body text-muted-foreground mb-2">
                Showing {filteredProducts.length} products
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    weight={`${product.weight} gm`}
                    rating={product.rating}
                    image={product.image}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-[10px] font-body text-muted-foreground mb-2">
                    No products found
                  </p>
                  <Button
                    variant="outline"
                    className="bg-background text-foreground border-border font-body text-[9px] h-6"
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
    </div>
  );
};

export default Shop;
