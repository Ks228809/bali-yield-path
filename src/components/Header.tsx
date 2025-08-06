import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <span className="text-xl font-bold text-foreground">MeKoin</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#why-bali" className="text-muted-foreground hover:text-foreground transition-colors">
            Why Bali?
          </a>
          <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
            Market
          </a>
        </nav>
        
        <Button variant="outline" size="sm">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;