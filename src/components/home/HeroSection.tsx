import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-library.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern library with cozy reading spaces"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 overlay-gradient" />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/20 animate-pulse" />
      </div>

      {/* Floating Orbs/Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge with Enhanced Glassmorphism */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-md border border-card/30 shadow-lg mb-6 hover:bg-card/25 transition-all duration-300 hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-lg shadow-accent/50" />
            <span className="text-card/95 text-xs md:text-sm font-body font-semibold tracking-wide">
              Digital Library Solutions
            </span>
            <Sparkles className="w-3 h-3 text-accent animate-pulse" />
          </div>

          {/* Headline with Gradient Text Effect */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-card drop-shadow-2xl">LibraryOne</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-accent animate-gradient bg-[length:200%_auto] drop-shadow-lg">
              Digital Libraries
            </span>
          </h1>

          {/* Description with Better Typography */}
          <div className="space-y-2 mb-6">
            <p className="animate-fade-up-delay-2 font-body text-sm md:text-base text-card/90 max-w-xl leading-relaxed drop-shadow-md">
              LibraryOne exists to empower libraries with innovative digital solutions that put you back in control. 
              We believe libraries deserve better—better technology, better pricing, and better partnerships.
            </p>
            <p className="animate-fade-up-delay-2 font-body text-sm md:text-base text-card/85 max-w-xl leading-relaxed drop-shadow-md">
              Our mission is to help libraries reclaim their digital identity, stretch their budgets further, 
              and serve their communities with the tools and content they need to thrive.
            </p>
          </div>

          {/* CTA Buttons with Enhanced Effects */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-6">
            <Link to="/demo">
              <Button 
                variant="hero" 
                size="xl" 
                className="group relative overflow-hidden shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient bg-[length:200%_auto]" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="group relative overflow-hidden backdrop-blur-sm border-2 hover:bg-card/10 transition-all duration-300 hover:scale-105 hover:border-card/40"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Overview
              </Button>
            </Link>
          </div>

          {/* Stats with Enhanced Design */}
          <div className="animate-fade-up-delay-3 grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-card/30 backdrop-blur-sm bg-card/5 rounded-t-2xl">
            <div className="text-center group">
              <p className="font-display text-3xl md:text-4xl font-bold text-card drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                10K+
              </p>
              <p className="font-body text-card/70 text-sm mt-1 font-medium">Libraries Served</p>
            </div>
            <div className="text-center group">
              <p className="font-display text-3xl md:text-4xl font-bold text-card drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                100%
              </p>
              <p className="font-body text-card/70 text-sm mt-1 font-medium">Library-Focused</p>
            </div>
            <div className="text-center group">
              <p className="font-display text-3xl md:text-4xl font-bold text-card drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                ∞
              </p>
              <p className="font-body text-card/70 text-sm mt-1 font-medium">Possibilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/40 backdrop-blur-sm bg-card/10 flex items-start justify-center p-2 shadow-lg hover:border-card/60 transition-colors">
          <div className="w-1.5 h-3 bg-gradient-to-b from-accent to-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
