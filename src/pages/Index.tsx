import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SolutionsOverviewSection from "@/components/home/SolutionsOverviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SolutionsOverviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
