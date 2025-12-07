import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Share2, Globe, Download, Search, Languages, BarChart3, LogIn, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import patternImage from "@/assets/pattern-books.jpg";

const PressReader = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    libraryName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demo Request Submitted",
        description: "We'll get back to you soon about your free PressReader demo!",
      });
      setFormData({
        customerName: "",
        libraryName: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  const features = [
    {
      icon: Globe,
      title: "Available day of publication",
      description: "Get the latest news and magazines as soon as they're published",
    },
    {
      icon: Download,
      title: "Unlimited access and downloads",
      description: "Download and read offline without restrictions",
    },
    {
      icon: Languages,
      title: "Translate articles in up to 18 languages",
      description: "Break language barriers with built-in translation",
    },
    {
      icon: Search,
      title: "Keyword search across the full text of all publications",
      description: "Find exactly what you're looking for quickly",
    },
    {
      icon: LogIn,
      title: "Easy setup with multiple authentication options",
      description: "Flexible login methods for seamless access",
    },
    {
      icon: BarChart3,
      title: "Engagement analytics and reporting",
      description: "Track usage and engagement with detailed analytics",
    },
  ];

    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-20 overflow-visible">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10">
            <img src={patternImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-xs md:text-sm text-card/80 mb-6">
                <Link to="/" className="hover:text-card transition-colors">
                Home
              </Link>
              <span>/</span>
                <span className="text-card font-medium">PressReader</span>
            </nav>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-card mb-4">
                    PressReader
                  </h1>
                  <p className="text-lg text-card/90 font-body">
                    eNewspapers and eMagazines
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-card/10 backdrop-blur border-card/20 text-card hover:bg-card/20"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="bg-card/10 backdrop-blur border border-card/20 rounded-lg p-4 mb-8">
                <p className="text-card font-semibold">
                  NEW! PressReader now offers The Economist!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Description */}
              <div className="mb-12">
                <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                  Accessing digital content has never been easier. With thousands of multi-language titles and unlimited access to <strong className="text-foreground">7,000+ premium newspapers and magazines</strong>, representing <strong className="text-foreground">120 countries and 60 languages</strong>, your patrons, students, and faculty can become a part of a global community of information and inspiration.
                </p>
                <p className="text-lg text-muted-foreground font-body leading-relaxed">
                  Easy access on any mobile device or laptop through your WiFi network or every reader's own library card improves the way your patrons, students, and faculty discover stories that matter.
        </p>
              </div>

              {/* Features Grid */}
              <div className="mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-xl p-6 border border-border card-elevated"
                    >
                      <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-card" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Single Sign-On Note */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Single Sign-On Integration
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Single sign-on gives patrons, students, and faculty integrated access to all PressReader content
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo Request Form */}
              <div className="bg-card rounded-xl p-8 md:p-10 border border-border card-elevated">
                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Request a Free Demo
                  </h2>
                  <p className="text-muted-foreground font-body">
                    Ask us about a free week free trial for new customers!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="customerName" className="text-foreground">
                        Customer Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="customerName"
                        type="text"
                        required
                        value={formData.customerName}
                        onChange={(e) =>
                          setFormData({ ...formData, customerName: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="libraryName" className="text-foreground">
                        Library Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="libraryName"
                        type="text"
                        required
                        value={formData.libraryName}
                        onChange={(e) =>
                          setFormData({ ...formData, libraryName: e.target.value })
                        }
                        placeholder="Enter library name"
                        className="w-full"
                      />
                    </div>
                  </div>
 
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Tell us more about how your library would like to use PressReader
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share details about your library's needs and how you'd like to use PressReader..."
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request a Free Demo"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer />
      </div>
    );
  };

  export default PressReader;
