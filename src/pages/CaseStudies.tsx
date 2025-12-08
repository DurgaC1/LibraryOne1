import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  X,
  BookOpen,
  Building2,
  Users,
  Star,
  Info,
  Filter,
  CheckCircle2,
  Clock,
  MapPin,
  Loader2,
  Menu,
} from "lucide-react";

type CaseStudyType = "public" | "academic" | "school";

interface CaseStudy {
  id: number;
  title: string;
  libraryName: string;
  location: string;
  type: CaseStudyType;
  impact: string;
  circulationGrowth: number;
  satisfactionScore: number;
  avatarInitials: string;
  highlight: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Modernizing Discovery for Urban Patrons",
    libraryName: "Seattle Public Library",
    location: "Seattle, Washington",
    type: "public",
    impact:
      "Improved discovery of e-resources led to a 38% increase in digital circulation within 12 months.",
    circulationGrowth: 38,
    satisfactionScore: 92,
    avatarInitials: "SP",
    highlight: "City-wide digital engagement campaign with TS360 and ESP.",
  },
  {
    id: 2,
    title: "Data-Driven Collections for STEM Students",
    libraryName: "MIT Libraries",
    location: "Cambridge, Massachusetts",
    type: "academic",
    impact:
      "Evidence-based selection helped re-balance print and digital, increasing usage of core STEM titles by 27%.",
    circulationGrowth: 27,
    satisfactionScore: 95,
    avatarInitials: "ML",
    highlight: "ESP-powered recommendations aligned with course reserves.",
  },
  {
    id: 3,
    title: "Building a Reading Culture in Suburban Schools",
    libraryName: "Plano Independent School District",
    location: "Plano, Texas",
    type: "school",
    impact:
      "Themed selection lists and standing orders supported a 40% increase in student checkouts.",
    circulationGrowth: 40,
    satisfactionScore: 89,
    avatarInitials: "PS",
    highlight: "Seasonal sliders and FirstLook lists for K–12.",
  },
];

const highlightSlides = [
  {
    id: 1,
    title: "Public Libraries",
    subtitle: "Scaling digital access in large urban systems.",
  },
  {
    id: 2,
    title: "Academic Libraries",
    subtitle: "Aligning collections with research and teaching.",
  },
  {
    id: 3,
    title: "School District Libraries",
    subtitle: "Supporting literacy journeys from Grade 1 to 12.",
  },
];

const CaseStudies = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CaseStudyType | "all">("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showFiltersMenu, setShowFiltersMenu] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Simulate loading for skeletons
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Auto-hide toast
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 2500);
    return () => clearTimeout(t);
  }, [showToast]);

  const filteredCaseStudies =
    activeTab === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.type === activeTab);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlightSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? highlightSlides.length - 1 : prev - 1
    );
  };

  const handleSaveToReadingList = () => {
    setShowToast(true);
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page-level keyframes for a subtle float animation */}
      <style>
        {`
          @keyframes cardFloat {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0px); }
          }
          .animate-card-float {
            animation: cardFloat 5s ease-in-out infinite;
          }
        `}
      </style>

      <Header />

      <main>
        {/* Top banner */}
        <div className="mt-20 bg-primary/10 border-b border-border">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-card text-xs font-semibold" title="Case Studies">
                CS
              </span>
              <p className="font-body text-muted-foreground">
                Real-world case studies from libraries around the world.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              Updated quarterly
            </div>
          </div>
        </div>

        {/* Hero + Breadcrumbs */}
        <section className="relative pt-20 pb-20 min-h-[60vh] flex items-center overflow-hidden">
          {/* Background with hero gradient */}
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center text-xs text-card/90 mb-4 space-x-1">
              <Link to="/" className="hover:text-card transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-card font-medium">Library Case Studies</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Hero text */}
              <div className="max-w-2xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-card mb-4 drop-shadow-lg">
                  Library Case Studies
                </h1>
                <p className="font-body text-base md:text-lg text-card mb-6 drop-shadow-md">
                  Discover how public, academic, and school libraries are
                  using{" "}
                  <span className="font-semibold">
                    Title Source 360 and Evidence-based Selection Planning (ESP)
                  </span>{" "}
                  to grow circulation, improve discovery, and serve their communities better.
                </p>

                {/* Hero actions + stepper */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Talk to our team
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-body text-card hover:text-card transition-colors"
                    onClick={() => setSelectedCase(caseStudies[0])}
                  >
                    View featured case
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Stepper */}
                <div className="flex items-center gap-4 text-xs text-card">
                  {["Discover", "Analyse", "Transform"].map((label, index) => (
                    <div key={label} className="flex items-center gap-1">
                      <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-card text-background text-[11px] font-semibold shadow-lg">
                        {index + 1}
                        <span className="absolute -bottom-4 text-[10px] whitespace-nowrap">
                          {label}
                        </span>
                      </div>
                      {index < 2 && (
                        <div className="w-8 h-[2px] bg-card/40 mt-0.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero side panel – secondary navbar + badges + mini carousel */}
              <aside className="w-full lg:w-[340px] bg-card/90 rounded-2xl p-5 border border-border/70 shadow-2xl backdrop-blur animate-card-float relative overflow-hidden before:absolute before:inset-x-0 before:-top-1 before:h-1 before:bg-gradient-to-r before:from-primary before:via-emerald-400 before:to-sky-400">
                {/* Local navbar / tabs */}
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-sm font-semibold">
                    Explore by segment
                  </p>
                  <button
                    type="button"
                    className="lg:hidden inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setShowFiltersMenu(true)}
                  >
                    <Menu className="w-3 h-3" />
                    Filters
                  </button>
                </div>

                <div className="hidden lg:flex mb-4 rounded-full bg-background border border-border p-1 text-xs">
                  {([
                    { id: "all" as const, label: "All", path: null },
                    { id: "public" as const, label: "Public", path: "/public-libraries" },
                    { id: "academic" as const, label: "Academic", path: "/academic-libraries" },
                    { id: "school" as const, label: "School", path: null },
                  ] as const).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTab(tab.id);
                        if (tab.path) {
                          navigate(tab.path);
                        }
                      }}
                      className={`flex-1 py-1.5 rounded-full transition-all ${
                        activeTab === tab.id
                          ? "bg-primary text-card shadow-sm"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Chips / badges */}
                <div className="flex flex-wrap gap-2 mb-4 text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    +25% avg. circulation
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    Data-driven ESP
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">
                    Global libraries
                  </span>
                </div>

                {/* Simple highlight slider / carousel */}
                <div className="relative rounded-xl bg-background border border-border/60 p-3 text-xs">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-[12px] mb-0.5">
                        {highlightSlides[currentSlide].title}
                      </p>
                      <p className="text-muted-foreground text-[11px]">
                        {highlightSlides[currentSlide].subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span>Slide {currentSlide + 1}</span>
                      <span>•</span>
                      <span>{highlightSlides.length} total</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={prevSlide}
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label="Previous highlight"
                      >
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={nextSlide}
                        className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label="Next highlight"
                      >
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tiny progress bar area */}
                <div className="mt-4 space-y-2 text-[11px]">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Project completion</span>
                      <span>78%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-1.5 bg-gradient-to-r from-primary via-emerald-400 to-sky-400 w-[78%]" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Off-canvas filters menu (mobile) */}
        {showFiltersMenu && (
          <div className="fixed inset-0 z-40 flex">
            <div
              className="flex-1 bg-black/50"
              onClick={() => setShowFiltersMenu(false)}
            />
            <div className="w-72 bg-card h-full shadow-2xl border-l border-border p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <p className="text-sm font-semibold">Filters</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowFiltersMenu(false)}
                  className="w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-muted-foreground mb-3">
                Filter case studies by library type.
              </p>

              <div className="space-y-2 text-sm">
                {([
                  { id: "all" as const, label: "All types", path: null },
                  { id: "public" as const, label: "Public libraries", path: "/public-libraries" },
                  { id: "academic" as const, label: "Academic libraries", path: "/academic-libraries" },
                  { id: "school" as const, label: "School & district libraries", path: null },
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setShowFiltersMenu(false);
                      if (tab.path) {
                        navigate(tab.path);
                      }
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg border text-xs flex items-center justify-between ${
                      activeTab === tab.id
                        ? "bg-primary text-card border-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Case studies grid (with skeletons & cards) */}
        <section className="py-16 bg-background border-t border-border/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-1">
                  Featured Case Studies
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  Explore how different libraries use data, standing orders, and notification
                  programs to transform their collections.
                </p>
              </div>
              <div className="hidden md:flex gap-2 text-xs">
                <button
                  type="button"
                  title="Public libraries"
                  className={`px-2.5 py-1 rounded-full border text-[11px] hover:bg-muted transition-colors ${
                    activeTab === "public" ? "border-primary text-primary" : "border-border"
                  }`}
                  onClick={() => {
                    setActiveTab("public");
                    navigate("/public-libraries");
                  }}
                >
                  Public
                </button>
                <button
                  type="button"
                  title="Academic libraries"
                  className={`px-2.5 py-1 rounded-full border text-[11px] hover:bg-muted transition-colors ${
                    activeTab === "academic" ? "border-primary text-primary" : "border-border"
                  }`}
                  onClick={() => {
                    setActiveTab("academic");
                    navigate("/academic-libraries");
                  }}
                >
                  Academic
                </button>
                <button
                  type="button"
                  title="School libraries"
                  className={`px-2.5 py-1 rounded-full border text-[11px] hover:bg-muted transition-colors ${
                    activeTab === "school" ? "border-primary text-primary" : "border-border"
                  }`}
                  onClick={() => setActiveTab("school")}
                >
                  School
                </button>
              </div>
            </div>

            {/* Loader / skeleton state */}
            {loading ? (
              <div className="grid gap-6 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-card/60 shadow-sm p-4 animate-pulse"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-muted" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 rounded-full bg-muted" />
                        <div className="h-2.5 rounded-full bg-muted w-2/3" />
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="h-2.5 rounded-full bg-muted" />
                      <div className="h-2.5 rounded-full bg-muted w-5/6" />
                      <div className="h-2.5 rounded-full bg-muted w-4/6" />
                    </div>
                    <div className="h-8 rounded-lg bg-muted" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-3">
                {filteredCaseStudies.map((study) => (
                  <article
                    key={study.id}
                    className="relative rounded-2xl border border-border bg-card/80 shadow-sm hover:shadow-xl transition-shadow group flex flex-col overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-gradient-to-r before:from-primary before:via-emerald-400 before:to-sky-400"
                  >
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Avatar + titles */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-[11px] font-semibold text-card shadow-md">
                            {study.avatarInitials}
                          </div>
                          <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-background border border-border flex items-center justify-center text-[10px]">
                            <BookOpen className="w-3 h-3" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-semibold mb-0.5">
                            {study.title}
                          </h3>
                          <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {study.libraryName} • {study.location}
                          </p>
                        </div>
                      </div>

                      {/* Impact + chips */}
                      <p className="text-xs text-muted-foreground mb-3">
                        {study.impact}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3 text-[11px]">
                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          +{study.circulationGrowth}% circulation
                        </span>
                        <span className="px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {study.satisfactionScore}% satisfaction
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-3">
                        <div className="flex justify-between mb-1 text-[10px] text-muted-foreground">
                          <span>Project milestones</span>
                          <span>On track</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-1.5 bg-gradient-to-r from-primary via-emerald-400 to-sky-400"
                            style={{
                              width: `${Math.min(
                                100,
                                Math.max(40, study.circulationGrowth + 40)
                              )}%`,
                            }}
                          />
                        </div>
                      </div>

                      <p className="text-[11px] text-muted-foreground line-clamp-2 mb-4">
                        {study.highlight}
                      </p>

                      {/* Actions */}
                      <div className="mt-auto flex items-center justify-between gap-2 text-[11px]">
                        <button
                          type="button"
                          onClick={() => setSelectedCase(study)}
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          View details
                          <ChevronRight className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveToReadingList}
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          title="Save this case study to your reading list"
                        >
                          <Star className="w-3 h-3 fill-yellow-400/60 text-yellow-400 group-hover:scale-110 transition-transform" />
                          Save
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Timeline + Tabs + Accordion section */}
        <section className="py-16 bg-card/40 border-y border-border/40">
          <div className="container mx-auto px-4 max-w-6xl grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Timeline */}
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
                Typical project timeline
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                From first conversation to fully optimized collections in libraries.
              </p>

              <ol className="relative border-l border-border/60 space-y-6 pl-4 text-sm">
                {[
                  {
                    step: "Discovery",
                    description:
                      "Understand your community profile, current collection performance, and digital vs print balance.",
                  },
                  {
                    step: "Pilot & ESP setup",
                    description:
                      "Connect circulation data, configure ESP, and pilot new ordering workflows with a small branch or campus.",
                  },
                  {
                    step: "Scale with TS360",
                    description:
                      "Roll out Title Source 360 for staff selectors, automate standing orders, and launch notification programs.",
                  },
                  {
                    step: "Measure & refine",
                    description:
                      "Review dashboards, adjust profiles, and align collection strategy with evolving community needs.",
                  },
                ].map((item, index) => (
                  <li key={item.step} className="relative pl-4">
                    <span className="absolute -left-[9px] top-1 flex items-center justify-center w-4 h-4 rounded-full bg-background border border-primary">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </span>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs uppercase tracking-wide text-primary/80">
                        Step {index + 1}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="font-semibold">{item.step}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tabs + Accordion */}
            <div className="bg-card rounded-2xl border border-border shadow-lg p-5 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-1">
                <p className="font-display text-sm font-semibold">
                  How libraries use these tools
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Users className="w-3 h-3" />
                  Staff-focused view
                </span>
              </div>

              {/* Tabs */}
              <div className="flex text-xs rounded-xl bg-background/80 border border-border/70 p-1">
                {[
                  { id: "selectors", label: "Selectors" },
                  { id: "directors", label: "Directors" },
                  { id: "it", label: "IT & Data" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => toggleAccordion(tab.id)}
                    className={`flex-1 px-2 py-1.5 rounded-lg transition-all ${
                      activeAccordion === tab.id
                        ? "bg-primary text-card shadow-sm"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Accordion items */}
              <div className="space-y-2 text-xs">
                {/* Selectors */}
                <button
                  type="button"
                  onClick={() => toggleAccordion("selectors")}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-background/80 border border-border hover:bg-muted transition-colors text-left"
                >
                  <span className="font-semibold">Collection selectors</span>
                  <ChevronRight
                    className={`w-3 h-3 transition-transform ${
                      activeAccordion === "selectors" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "selectors" && (
                  <div className="px-3 pb-3 text-muted-foreground">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        Use{" "}
                        <span className="font-medium">
                          FirstLook and selection lists
                        </span>{" "}
                        to stay ahead of publishing trends.
                      </li>
                      <li>
                        Combine{" "}
                        <span className="font-medium">standing orders</span> with
                        local favourites for a balanced mix.
                      </li>
                      <li>
                        Rely on{" "}
                        <span className="font-medium">ESP scores</span> to
                        prioritize high-impact titles for each branch.
                      </li>
                    </ul>
                  </div>
                )}

                {/* Directors */}
                <button
                  type="button"
                  onClick={() => toggleAccordion("directors")}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-background/80 border border-border hover:bg-muted transition-colors text-left"
                >
                  <span className="font-semibold">Library directors</span>
                  <ChevronRight
                    className={`w-3 h-3 transition-transform ${
                      activeAccordion === "directors" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "directors" && (
                  <div className="px-3 pb-3 text-muted-foreground">
                    <p>
                      Directors use shared dashboards and
                      profiles to align spending with strategic goals—such as
                      supporting online learners, re-engaging teens, or
                      strengthening local history collections.
                    </p>
                  </div>
                )}

                {/* IT */}
                <button
                  type="button"
                  onClick={() => toggleAccordion("it")}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-background/80 border border-border hover:bg-muted transition-colors text-left"
                >
                  <span className="font-semibold">IT & data teams</span>
                  <ChevronRight
                    className={`w-3 h-3 transition-transform ${
                      activeAccordion === "it" ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {activeAccordion === "it" && (
                  <div className="px-3 pb-3 text-muted-foreground">
                    <p>
                      Data teams integrate ILS circulation feeds, authentication
                      systems, and reporting tools so selectors can work
                      confidently with clean, up-to-date metrics.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery grid (pseudo tooltips, hover, transitions) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
                  Snapshot gallery
                </h3>
                <p className="text-sm text-muted-foreground">
                  Visual slices from library projects – branches, campuses, and school media
                  centers.
                </p>
              </div>
              <span className="hidden md:inline-flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Hover to see focus areas
                <Info className="w-3 h-3" />
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3 group/gallery">
              {[
                "Urban public branches",
                "Research-intensive campuses",
                "School district hubs",
                "Digital-only expansions",
                "Community learning labs",
                "Regional consortia",
              ].map((label, index) => (
                <div
                  key={label}
                  className="group/item relative h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 border border-border/60 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default card-elevated"
                >
                  {/* Hover indicator */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group/gallery:hover:opacity-100 group/item:hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="inline-flex items-center gap-1 text-xs text-foreground/90 bg-card/95 backdrop-blur-sm px-2 py-1 rounded-full border border-border/60 shadow-sm">
                      Hover to see focus areas
                      <Info className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.3),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.3),_transparent_50%)]" />
                  <div className="relative z-10 h-full flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between text-xs text-foreground/70">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        Libraries
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Stakeholders
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm text-foreground mb-1 font-semibold">
                        {label}
                      </p>
                      <p className="text-[11px] text-foreground/70">
                        {index % 2 === 0
                          ? "Focused on discovery, equity of access, and digital reach."
                          : "Emphasis on course-aligned collections and community outcomes."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loader + CTA & dropdown menu */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3 text-card">
              Ready to write your own case study?
            </h3>
            <p className="text-sm md:text-base text-card/80 mb-6">
              Whether you are a small public library, a large university system, or a growing
              school district, we can help you plan the next chapter of your collection strategy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Link to="/demo">
                <Button variant="hero" size="lg" className="group">
                  Request a library demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Simple dropdown menu */}
              <div className="relative group">
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="inline-flex items-center gap-2 text-xs"
                >
                  Choose your library type
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <div className="absolute left-0 right-0 mt-1 bg-card rounded-xl border border-border shadow-xl text-left text-xs py-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                  <button
                    type="button"
                    onClick={() => navigate("/public-libraries")}
                    className="w-full text-left px-3 py-2 hover:bg-muted"
                  >
                    Public library
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/academic-libraries")}
                    className="w-full text-left px-3 py-2 hover:bg-muted"
                  >
                    Academic library
                  </button>
                  <button
                    type="button"
                    className="w-full text-left px-3 py-2 hover:bg-muted"
                  >
                    School / district
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Modal popup for case study details */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-card border border-border shadow-2xl">
            <button
              type="button"
              className="absolute right-3 top-3 w-7 h-7 rounded-full hover:bg-muted flex items-center justify-center"
              onClick={() => setSelectedCase(null)}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-xs font-semibold text-card shadow-md">
                  {selectedCase.avatarInitials}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-primary/80 mb-0.5">
                    {selectedCase.type.toUpperCase()} LIBRARY
                  </p>
                  <h4 className="font-display text-lg font-semibold">
                    {selectedCase.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    {selectedCase.libraryName} • {selectedCase.location}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {selectedCase.impact}
              </p>

              <div className="grid gap-3 md:grid-cols-2 text-xs mb-4">
                <div className="rounded-xl bg-background p-3 border border-border">
                  <p className="text-[11px] text-muted-foreground mb-1">
                    Circulation growth
                  </p>
                  <p className="font-semibold text-lg">
                    +{selectedCase.circulationGrowth}%
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Compared with pre-implementation baseline.
                  </p>
                </div>
                <div className="rounded-xl bg-background p-3 border border-border">
                  <p className="text-[11px] text-muted-foreground mb-1">
                    Patron satisfaction
                  </p>
                  <p className="font-semibold text-lg">
                    {selectedCase.satisfactionScore}%
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Based on local surveys and feedback forms.
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Highlight: {selectedCase.highlight}
              </p>

              <div className="flex flex-wrap gap-2 justify-between items-center text-[11px]">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Filter className="w-3 h-3" />
                  <span>ESP profile tuned for branch demand</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleSaveToReadingList}>
                  Share with my team
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="flex items-center gap-2 rounded-full bg-card border border-border shadow-xl px-3 py-2 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              Case study added to your reading list.{" "}
              <button className="underline underline-offset-2">
                View list
              </button>
            </span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CaseStudies;
