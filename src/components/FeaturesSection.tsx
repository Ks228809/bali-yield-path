import { 
  TrendingUp, 
  Coins, 
  RefreshCw, 
  Shield, 
  MapPin 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: TrendingUp,
    title: "Hybrid Fixed + Revenue-Share Lending",
    description: "Balanced risk-return profile combining fixed income with upside potential from property performance."
  },
  {
    icon: Coins,
    title: "Tokenized Yield-Bearing Stablecoins",
    description: "Trade your investment positions seamlessly while earning continuous yield in USDC/USDT."
  },
  {
    icon: RefreshCw,
    title: "Secondary Market Liquidity",
    description: "Exit your positions early through our peer-to-peer secondary marketplace for maximum flexibility."
  },
  {
    icon: Shield,
    title: "Borderless & Crypto-Native",
    description: "Secure, transparent, and globally accessible investment platform built on blockchain technology."
  },
  {
    icon: MapPin,
    title: "Southeast Asian Hospitality Focus",
    description: "Curated boutique properties in high-growth tourism markets with strong fundamentals and stable returns."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revolutionary Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of real estate investment with our innovative tokenized platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-luxury group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;