import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import highlightImage from "@/assets/highlight-model.jpg";
import heroImage from "@/assets/hero-model.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Pretti
          </h1>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Where Every Ring And Necklace Tells Your Story
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-base font-body text-muted-foreground mb-4">
                Founded with a passion for timeless elegance, Pretti has been creating mesmerizing jewellery pieces that capture life's most precious moments. Our journey began with a simple belief: that every piece of jewellery should tell a unique story.
              </p>
              <p className="text-base font-body text-muted-foreground mb-4">
                We blend traditional craftsmanship with contemporary design, ensuring that each piece not only meets but exceeds the expectations of those who wear it. Our artisans bring decades of experience, working with the finest materials to create jewellery that stands the test of time.
              </p>
              <p className="text-base font-body text-muted-foreground">
                At Pretti, we don't just create jewellery – we craft heirlooms that will be treasured for generations to come.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img 
                src={highlightImage} 
                alt="Pretti Jewellery Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Quality Craftsmanship
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Every piece is meticulously crafted by skilled artisans who bring their expertise and passion to each creation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Authentic Materials
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                We use only genuine, ethically sourced materials to ensure the highest quality and sustainability.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Timeless Design
              </h3>
              <p className="text-sm font-body text-muted-foreground">
                Our designs blend classic elegance with modern aesthetics, creating pieces that never go out of style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-sm order-2 lg:order-1">
              <img 
                src={heroImage} 
                alt="Pretti Jewellery Collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
                Our Commitment
              </h2>
              <p className="text-base font-body text-muted-foreground mb-4">
                We are committed to providing an exceptional experience for every customer. From the moment you discover our collections to the day you receive your piece, we ensure that every step reflects our dedication to excellence.
              </p>
              <p className="text-base font-body text-muted-foreground mb-4">
                Our team is passionate about helping you find the perfect piece that resonates with your personal style and celebrates your special moments.
              </p>
              <p className="text-base font-body text-muted-foreground">
                Thank you for choosing Pretti. We look forward to being part of your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
