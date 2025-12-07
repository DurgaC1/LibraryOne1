import { Target, Heart, Handshake, TrendingDown, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower libraries with innovative digital solutions that put control back in your hands. We're committed to helping libraries serve their communities better.",
  },
  {
    icon: Heart,
    title: "Why We Exist",
    description: "Libraries deserve partners, not vendors. We believe in building solutions that respect your budget, your brand, and your mission to serve your community.",
  },
  {
    icon: Handshake,
    title: "Partnership First",
    description: "We work with libraries, not against them. Our solutions are designed to keep your library's identity front and center, not hidden behind vendor branding.",
  },
  {
    icon: TrendingDown,
    title: "Budget Relief",
    description: "Stretch your digital budget further with better pricing, flexible terms, and solutions designed to maximize your investment in your community.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Every decision we make is guided by one question: How does this help libraries better serve their patrons and communities?",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We're constantly innovating to solve real problems libraries face—from vendor lock-in to budget constraints to patron engagement.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-primary font-body font-semibold text-sm uppercase tracking-wider mb-4">
            Our Values
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why We Do What We Do
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            LibraryOne was founded on a simple belief: libraries deserve better. Better technology, 
            better partnerships, and better solutions that put you—and your patrons—first.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-8 card-elevated border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-card" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
