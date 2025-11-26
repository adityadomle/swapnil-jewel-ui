import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanners from "@/components/PromoBanners";
import HighlightBanner from "@/components/HighlightBanner";
import Testimonials from "@/components/Testimonials";
import BraceletBanner from "@/components/BraceletBanner";
import Footer from "@/components/Footer";

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
      <Testimonials />
      <BraceletBanner />
      <Footer />
    </div>
  );
};

export default Index;
