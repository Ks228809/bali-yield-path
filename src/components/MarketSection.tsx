import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Building } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$5.7T",
    label: "Global SME Financing Gap",
    description: "Massive opportunity in emerging market financing"
  },
  {
    icon: Users,
    value: "93.6M",
    label: "Stablecoin Holders",
    description: "Growing crypto investor base seeking yield"
  },
  {
    icon: Building,
    value: "$10T",
    label: "RWA Market by 2030",
    description: "Real-world assets tokenization boom"
  }
];

const MarketSection = () => {
  return (
    <section id="market" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Market Opportunity
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're positioned at the intersection of massive market trends driving unprecedented growth 
            in tokenized real-world assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:shadow-luxury group text-center"
            >
              <CardContent className="p-8">
                <div className="mb-6 mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Market Insights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-card/30 to-card/60 backdrop-blur-sm border border-border rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Why Now? Market Convergence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  DeFi Meets Real Estate
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The convergence of decentralized finance and real-world assets creates 
                  unprecedented opportunities for global capital allocation and yield generation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  Emerging Market Growth
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Southeast Asia's rapidly growing tourism sector combined with limited 
                  access to traditional financing creates ideal conditions for innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;