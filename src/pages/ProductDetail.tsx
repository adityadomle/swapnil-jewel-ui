import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import { getProductById, getRelatedProducts } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getRelatedProducts(product.id, product.category) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-heading text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = `Hi, I'm interested in ${product.name} (${product.weight}). Please share more details.`;
  const whatsappLink = `https://wa.me/917796869904?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16 py-6 lg:py-12">
        {/* Back Button */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-1 lg:gap-2 text-muted-foreground hover:text-foreground text-sm lg:text-base mb-4 lg:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
          Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Product Image */}
          <div className="bg-beige rounded-lg lg:rounded-2xl p-4 sm:p-6 lg:p-12">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[500px] lg:max-h-[600px] object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-xs lg:text-sm text-gold font-body uppercase tracking-wider mb-1 lg:mb-3">
              {product.category}
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-heading font-bold text-foreground mb-2 lg:mb-4">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-1 lg:gap-2 mb-3 lg:mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 lg:w-6 lg:h-6 ${i < product.rating ? 'fill-gold text-gold' : 'text-muted'}`}
                />
              ))}
              <span className="text-xs lg:text-base text-muted-foreground ml-1 lg:ml-2">({product.rating}/5)</span>
            </div>

            {/* Weight & Purity */}
            <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-8">
              <span className="text-lg lg:text-3xl font-heading font-semibold text-gold">
                {product.weight}
              </span>
              <span className="px-2 lg:px-4 py-0.5 lg:py-2 bg-gold/10 text-gold text-xs lg:text-base font-body rounded lg:rounded-lg">
                {product.purity} Pure Gold
              </span>
            </div>

            {/* Description */}
            <p className="text-sm lg:text-lg font-body text-muted-foreground leading-relaxed mb-6 lg:mb-10">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-card border border-border/50 rounded-lg lg:rounded-xl p-4 lg:p-8 mb-6 lg:mb-10">
              <h3 className="text-sm lg:text-xl font-heading font-semibold text-foreground mb-3 lg:mb-6">
                Specifications
              </h3>
              <div className="space-y-2 lg:space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs lg:text-base font-body">
                    <span className="text-muted-foreground capitalize">{key}</span>
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 lg:gap-3 bg-green-600 hover:bg-green-700 text-white py-3 lg:py-4 rounded-lg lg:rounded-xl font-body font-medium lg:text-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
              Enquire on WhatsApp
            </a>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 lg:gap-8 mt-4 lg:mt-6 text-xs lg:text-base text-muted-foreground font-body">
              <span>✓ BIS Hallmarked</span>
              <span>✓ Certified Pure Gold</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 lg:mt-20">
            <h2 className="text-lg lg:text-3xl font-heading font-bold text-foreground mb-4 lg:mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <ProductCard
                    name={relatedProduct.name}
                    weight={relatedProduct.weight}
                    rating={relatedProduct.rating}
                    image={relatedProduct.image}
                  />
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
