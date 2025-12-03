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
    <section className="py-3 bg-background border-b border-border/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-4 gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-4 h-4 text-gold mb-1" strokeWidth={1.5} />
              <h3 className="font-body font-medium text-foreground text-[8px] sm:text-[9px]">
                {feature.title}
              </h3>
              <p className="text-[7px] sm:text-[8px] font-body text-muted-foreground hidden sm:block">
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
