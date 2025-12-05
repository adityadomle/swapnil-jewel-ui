import { Truck, ShieldCheck, Gift, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      subtitle: "On orders above ₹1000"
    },
    {
      icon: ShieldCheck,
      title: "Money Back",
      subtitle: "15 days guarantee"
    },
    {
      icon: Gift,
      title: "Special Offers",
      subtitle: "On all items"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      subtitle: "Call anytime"
    }
  ];

  return (
    <section className="py-3 lg:py-8 bg-background border-b border-border/30">
      <div className="max-w-7xl lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-12 xl:px-16">
        <div className="grid grid-cols-4 gap-2 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-4 h-4 lg:w-8 lg:h-8 text-gold mb-1 lg:mb-3" strokeWidth={1.5} />
              <h3 className="font-body font-medium text-foreground text-[8px] sm:text-[9px] lg:text-base">
                {feature.title}
              </h3>
              <p className="text-[7px] sm:text-[8px] lg:text-sm font-body text-muted-foreground hidden sm:block">
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
