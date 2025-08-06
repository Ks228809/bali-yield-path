import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bali-villa.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Unlock Real-World Yield
            </span>
            <br />
            <span className="text-foreground">
              from Boutique Hospitality
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
              in Emerging Markets
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Invest in tokenized hybrid loans secured by real assets like boutique villas, 
            earn scheduled yield in USDC/USDT, and empower local operators in high-growth markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">$5.7T</div>
              <div className="text-sm text-muted-foreground">Global SME Financing Gap</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">93.6M</div>
              <div className="text-sm text-muted-foreground">Stablecoin Holders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">$10T</div>
              <div className="text-sm text-muted-foreground">RWA Market by 2030</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;