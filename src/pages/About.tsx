import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import highlightImage from "@/assets/highlight-model.jpg";
import heroImage from "@/assets/hero-model.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-4 bg-beige">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h1 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-1">
            About Swapnil Jewellers
          </h1>
          <p className="text-[10px] font-body text-muted-foreground max-w-xl mx-auto">
            Your Trusted Destination For Pure 22K Gold Jewellery
          </p>
        </div>
      </section>

      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-sm font-heading font-semibold text-foreground mb-2">
                Our Story
              </h2>
              <p className="text-[9px] font-body text-muted-foreground mb-1.5">
                Founded with a passion for pure gold craftsmanship, Swapnil Jewellers has been creating exquisite 22K gold jewellery that captures life's most precious moments.
              </p>
              <p className="text-[9px] font-body text-muted-foreground mb-1.5">
                We blend traditional Indian craftsmanship with modern designs, ensuring each piece exceeds expectations. Our artisans bring decades of experience, working with the finest pure gold.
              </p>
              <p className="text-[9px] font-body text-muted-foreground">
                At Swapnil Jewellers, we craft heirlooms treasured for generations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm h-40 sm:h-48">
              <img 
                src={highlightImage} 
                alt="Pure gold jewellery craftsmanship"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-beige">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-sm font-heading font-semibold text-foreground text-center mb-3">
            Our Values
          </h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2 bg-card rounded-lg">
              <h3 className="text-[10px] font-heading font-semibold text-foreground mb-1">
                Pure Gold
              </h3>
              <p className="text-[8px] font-body text-muted-foreground">
                Only certified 22K gold used in every piece
              </p>
            </div>
            <div className="text-center p-2 bg-card rounded-lg">
              <h3 className="text-[10px] font-heading font-semibold text-foreground mb-1">
                Expert Craft
              </h3>
              <p className="text-[8px] font-body text-muted-foreground">
                Skilled artisans with generations of experience
              </p>
            </div>
            <div className="text-center p-2 bg-card rounded-lg">
              <h3 className="text-[10px] font-heading font-semibold text-foreground mb-1">
                Timeless Design
              </h3>
              <p className="text-[8px] font-body text-muted-foreground">
                Classic elegance with modern aesthetics
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div className="rounded-lg overflow-hidden shadow-sm h-40 sm:h-48 order-2 lg:order-1">
              <img 
                src={heroImage} 
                alt="Pure gold collection"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-heading font-semibold text-foreground mb-2">
                Our Commitment
              </h2>
              <p className="text-[9px] font-body text-muted-foreground mb-1.5">
                We provide an exceptional experience from discovery to delivery, with every step reflecting our dedication to excellence.
              </p>
              <p className="text-[9px] font-body text-muted-foreground mb-1.5">
                Our team helps you find the perfect pure gold piece that celebrates your special moments.
              </p>
              <p className="text-[9px] font-body text-gold font-medium">
                Thank you for choosing Swapnil Jewellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
