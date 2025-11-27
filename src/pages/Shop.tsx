import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  const products = [
    { name: "Diamond Ring", category: "ring", price: 15, rating: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
    { name: "Pearl Necklace", category: "necklace", price: 25, rating: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
    { name: "Gold Bracelet", category: "bracelet", price: 12, rating: 4, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
    { name: "Sapphire Ring", category: "ring", price: 35, rating: 5, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400" },
    { name: "Silver Chain", category: "necklace", price: 8, rating: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
    { name: "Gold Bangle", category: "bracelet", price: 18, rating: 5, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400" },
    { name: "Emerald Ring", category: "ring", price: 42, rating: 5, image: "https://images.unsplash.com/photo-1614179689702-355944cd57d4?w=400" },
    { name: "Diamond Pendant", category: "necklace", price: 32, rating: 4, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
    { name: "Tennis Bracelet", category: "bracelet", price: 28, rating: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
    { name: "Ruby Ring", category: "ring", price: 38, rating: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
    { name: "Gold Chain", category: "necklace", price: 22, rating: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
    { name: "Charm Bracelet", category: "bracelet", price: 16, rating: 4, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400" },
    { name: "Vintage Gold Ring", category: "ring", price: 29, rating: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
    { name: "Luxury Pearl Necklace", category: "necklace", price: 45, rating: 5, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
    { name: "Designer Gold Bracelet", category: "bracelet", price: 33, rating: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
    { name: "Classic Diamond Ring", category: "ring", price: 48, rating: 5, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400" },
    { name: "Elegant Gold Necklace", category: "necklace", price: 27, rating: 4, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
    { name: "Modern Gold Bangle", category: "bracelet", price: 21, rating: 5, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400" },
    { name: "Statement Gold Ring", category: "ring", price: 31, rating: 5, image: "https://images.unsplash.com/photo-1614179689702-355944cd57d4?w=400" },
    { name: "Delicate Pearl Pendant", category: "necklace", price: 19, rating: 4, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
    { name: "Gold Link Bracelet", category: "bracelet", price: 24, rating: 5, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
    { name: "Halo Diamond Ring", category: "ring", price: 52, rating: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
    { name: "Gold Choker Necklace", category: "necklace", price: 36, rating: 5, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
    { name: "Infinity Gold Bracelet", category: "bracelet", price: 26, rating: 4, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400" },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange === "0-15") {
      priceMatch = product.price <= 15;
    } else if (selectedPriceRange === "15-30") {
      priceMatch = product.price > 15 && product.price <= 30;
    } else if (selectedPriceRange === "30+") {
      priceMatch = product.price > 30;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-12 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Shop Collection
          </h1>
          <p className="text-sm font-body text-muted-foreground">
            Discover our exquisite selection of handcrafted jewellery
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-beige rounded-lg p-4 sticky top-24">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Filters
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-3">
                    Category
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedCategory === "all"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      All Products
                    </button>
                    <button
                      onClick={() => setSelectedCategory("ring")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedCategory === "ring"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Rings
                    </button>
                    <button
                      onClick={() => setSelectedCategory("necklace")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedCategory === "necklace"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Necklaces
                    </button>
                    <button
                      onClick={() => setSelectedCategory("bracelet")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedCategory === "bracelet"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Bracelets
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-body font-semibold text-foreground uppercase tracking-wider mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedPriceRange("all")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedPriceRange === "all"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      All Prices
                    </button>
                    <button
                      onClick={() => setSelectedPriceRange("0-15")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedPriceRange === "0-15"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Under 15 gm
                    </button>
                    <button
                      onClick={() => setSelectedPriceRange("15-30")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedPriceRange === "15-30"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      15 - 30 gm
                    </button>
                    <button
                      onClick={() => setSelectedPriceRange("30+")}
                      className={`block w-full text-left px-3 py-1.5 rounded font-body text-xs ${
                        selectedPriceRange === "30+"
                          ? "bg-background text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      30+ gm
                    </button>
                  </div>
                </div>

                {(selectedCategory !== "all" || selectedPriceRange !== "all") && (
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-background text-foreground border-border font-body text-xs h-8"
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
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-body text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    weight={`${product.price} gm`}
                    rating={product.rating}
                    image={product.image}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-sm font-body text-muted-foreground mb-3">
                    No products found matching your filters
                  </p>
                  <Button
                    variant="outline"
                    className="bg-background text-foreground border-border font-body text-xs h-8"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedPriceRange("all");
                    }}
                  >
                    Clear All Filters
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
