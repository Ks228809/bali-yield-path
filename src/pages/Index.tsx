import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyBaliSection from "@/components/WhyBaliSection";
import MarketSection from "@/components/MarketSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WhyBaliSection />
      <MarketSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
