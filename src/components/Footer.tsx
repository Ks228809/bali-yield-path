import { Mail, MapPin, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-card/30 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">MeKoin</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Democratizing access to real-world yield through tokenized hospitality investments 
              in emerging markets.
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Southeast Asia</span>
            </div>
          </div>
          
          {/* Team & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary" />
              Team & Contact
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-1">Press Inquiries</h4>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a 
                    href="mailto:itscollinn@gmail.com" 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    itscollinn@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">General Information</h4>
                <p className="text-sm text-muted-foreground">
                  Building the future of hospitality finance
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <div className="space-y-3">
              <a 
                href="#features" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </a>
              <a 
                href="#why-bali" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Why Bali?
              </a>
              <a 
                href="#market" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Market Opportunity
              </a>
              <a 
                href="#waitlist" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 MeKoin. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">
              Tokenizing hospitality, empowering communities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;