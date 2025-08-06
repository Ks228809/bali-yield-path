import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "investor"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon with early access details.",
    });
    setFormData({ name: "", email: "", interest: "investor" });
  };

  return (
    <section className="py-24 px-4 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join the Waitlist
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be among the first to access tokenized hospitality investments in Southeast Asia. 
            Early members get exclusive access and preferential terms.
          </p>
        </div>
        
        <Card className="bg-card/50 backdrop-blur-sm border-border shadow-luxury max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-3">
                <Label className="text-foreground">I'm interested as a:</Label>
                <RadioGroup
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:border-primary/40 transition-colors">
                    <RadioGroupItem value="investor" id="investor" />
                    <Label htmlFor="investor" className="font-medium cursor-pointer">Investor</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:border-primary/40 transition-colors">
                    <RadioGroupItem value="operator" id="operator" />
                    <Label htmlFor="operator" className="font-medium cursor-pointer">Operator</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:border-primary/40 transition-colors">
                    <RadioGroupItem value="partner" id="partner" />
                    <Label htmlFor="partner" className="font-medium cursor-pointer">Partner</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button type="submit" variant="cta" size="lg" className="w-full">
                Join the Waitlist
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            By joining, you agree to receive updates about MeKoin. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;