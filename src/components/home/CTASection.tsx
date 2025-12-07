import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import patternImage from "@/assets/pattern-books.jpg";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-10">
        <img
          src={patternImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-4">
            Ready to Reclaim Your Digital Future?
          </h2>
          <p className="font-body text-base md:text-lg text-card/80 mb-8 max-w-xl mx-auto">
            Let's work together to build a digital library solution that puts you back in control. 
            Join libraries across the country who have chosen a better way forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/demo">
              <Button variant="hero" size="xl" className="group">
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl" className="group">
                <Phone className="w-5 h-5" />
                Contact Sales
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <p className="font-body text-card/60 text-sm">
            For more information, call us toll-free at{" "}
            <a href="tel:1-800-775-1800" className="text-card hover:underline font-medium">
              1-800-775-1800
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
