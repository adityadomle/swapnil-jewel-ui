import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanners from "@/components/PromoBanners";
import HighlightBanner from "@/components/HighlightBanner";
import BraceletBanner from "@/components/BraceletBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <NewArrivals />
      <FeaturedProducts />
      <PromoBanners />
      <HighlightBanner />
      <BraceletBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
