import { Card, CardContent } from "@/components/ui/card";
import { Globe, Scale, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Global Tourism Appeal",
    description: "Bali attracts over 6 million international visitors annually, ensuring consistent demand for luxury accommodations."
  },
  {
    icon: Scale,
    title: "Crypto-Friendly Regulation",
    description: "Indonesia's progressive approach to digital assets creates a favorable environment for tokenized investments."
  },
  {
    icon: TrendingUp,
    title: "High-Yield Boutique Properties",
    description: "Premium hospitality assets in prime locations deliver superior returns compared to traditional real estate markets."
  }
];

const WhyBaliSection = () => {
  return (
    <section id="why-bali" className="py-24 px-4 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bali?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bali represents the perfect intersection of tourism growth, regulatory clarity, 
            and investment opportunity in the hospitality sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-luxury group"
            >
              <CardContent className="p-8">
                <div className="mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional content about Bali */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-hero-gradient p-8 rounded-3xl text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              The Perfect Investment Destination
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Bali's unique combination of cultural richness, natural beauty, and business-friendly environment 
              makes it an ideal location for hospitality investments. With consistent year-round tourism and 
              growing international recognition, boutique properties in Bali offer both stability and growth potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBaliSection;