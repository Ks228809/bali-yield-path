import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/4615f668-2fcf-4e39-a14b-72e227e2c583.png" 
            alt="MeKoin Logo" 
            className="h-10 w-auto"
          />
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