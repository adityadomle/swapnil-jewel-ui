import { Truck, ShieldCheck, Gift, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "All Over India",
      subtitle: "Free Shipping On Order Above ₹1000"
    },
    {
      icon: ShieldCheck,
      title: "Money Back Guarantee",
      subtitle: "Money back in 15 days"
    },
    {
      icon: Gift,
      title: "Offers And Discounts",
      subtitle: "On all our items"
    },
    {
      icon: Headphones,
      title: "24/7 Support Services",
      subtitle: "Call us at anytime"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <feature.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
