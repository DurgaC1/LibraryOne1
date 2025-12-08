import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, ShoppingCart, RotateCcw, Globe, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: BookOpen,
    title: "Boundless",
    description: "An extensive digital library platform with eBooks, audiobooks, videobooks, and more.",
    path: "/boundless",
  },
  {
    icon: ShoppingCart,
    title: "Title Source 360",
    description: "Select print, eBook, and entertainment titles for easy ordering and fast delivery.",
    path: "/title-source-360",
  },
  {
    icon: Globe,
    title: "ePopup",
    description: "Take your library’s digital collection into everyday spaces with instant QR access.",
    path: "/e-popup",
  },
  {
    icon: RotateCcw,
    title: "Content Services",
    description: "Access, manage, and explore your entire digital collection from one seamless platform.",
    path: "/digital-content",
  },
];

const SolutionsOverviewSection = () => {
  return (
    <section className="pt-12 md:pt-16 pb-8 md:pb-10 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Digital Library Solutions
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            LibraryOne offers a suite of innovative solutions designed to help libraries 
            manage their digital collections, serve their patrons, and maximize their budgets.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-card rounded-xl p-8 card-elevated border border-border group hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <solution.icon className="w-7 h-7 text-card" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                {solution.description}
              </p>

              <Link
                to={solution.path}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Solutions Link */}
        <div className="text-center mt-6">
          <Link to="/solutions">
            <Button variant="outline" size="lg" className="group">
              View All Solutions
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverviewSection;

