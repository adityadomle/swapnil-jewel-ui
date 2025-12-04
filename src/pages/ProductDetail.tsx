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
      
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6">
        {/* Back Button */}
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Product Image */}
          <div className="bg-beige rounded-lg p-4 sm:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[500px] object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-xs text-gold font-body uppercase tracking-wider mb-1">
              {product.category}
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < product.rating ? 'fill-gold text-gold' : 'text-muted'}`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">({product.rating}/5)</span>
            </div>

            {/* Weight & Purity */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-lg font-heading font-semibold text-gold">
                {product.weight}
              </span>
              <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs font-body rounded">
                {product.purity} Pure Gold
              </span>
            </div>

            {/* Description */}
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-card border border-border/50 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-heading font-semibold text-foreground mb-3">
                Specifications
              </h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs font-body">
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
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-body font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire on WhatsApp
            </a>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground font-body">
              <span>✓ BIS Hallmarked</span>
              <span>✓ Certified Pure Gold</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-heading font-bold text-foreground mb-4">
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
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
