import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Naushil Doshi",
      role: "Businessman",
      text: "Amazing jewelry collection! The quality and design exceeded my expectations. The gold ring I purchased is absolutely stunning and my wife loves it.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
    },
    {
      name: "Angelina Menol",
      role: "Entrepreneur",
      text: "The craftsmanship of this jewelry brand is truly remarkable. Every piece is a work of art. I've been recommending them to all my friends and family.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
    },
    {
      name: "John Doe",
      role: "Designer",
      text: "Impressive quality & brilliant designs! The attention to detail is what sets this brand apart. I'm absolutely in love with my diamond bracelet purchase.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
    }
  ];

  return (
    <section className="py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base font-body text-muted-foreground">
            There are many of things of passages of Lorem Ipsum available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-body font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-body text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
