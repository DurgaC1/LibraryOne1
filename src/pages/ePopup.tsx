import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// ⚠️ Use NEW images here (not the ones already used in Hero etc.)
import epopupHero from "@/assets/epopup-hero.jpg";      // wide banner-style image
import epopupDetail from "@/assets/epopup-detail.jpg";  // supporting / detail image

const EPopup = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-card/80 mb-2">
                  Product • ePopUp Library
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-card drop-shadow-lg">
                  Take your library&apos;s digital collection{" "}
                  <span className="text-accent">out into the community</span>
                </h1>
                <p className="text-card/90 mb-4 drop-shadow-md">
                ePopUp Library lets you share your digital collection in busy,
                unexpected places—like buses, stations, airports, hotels and
                partner locations. Readers can scan a QR code and start reading
                instantly, no app or library card required for temporary access.
              </p>
                <p className="text-card/90 mb-6 drop-shadow-md">
                  It&apos;s a simple way to promote your library, reach new users
                  and show up where your community already is.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" asChild size="lg">
                    <a href="/demo" className="flex items-center gap-2">
                      Request a demo
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" asChild size="lg">
                    <a href="/boundless">Explore our other products</a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border/60 bg-card card-elevated">
                  <img
                    src={epopupHero}
                    alt="ePopUp Library in use at public spaces"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden border border-border/60 shadow-lg bg-card card-elevated">
                  <img
                    src={epopupDetail}
                    alt="QR code and digital collection promotion"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 space-y-12 py-16">

          {/* What is ePopUp Library? */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                What is ePopUp Library?
              </h2>
              <p className="text-muted-foreground mb-4">
                ePopUp Library is a pop-up access point for your digital
                collection. Your library gets a unique QR code and branded
                landing page that can be displayed on posters, screens or table
                toppers at partner locations.
              </p>
              <p className="text-muted-foreground">
                When someone scans the code, they&apos;re taken straight to a
                curated collection of eBooks, audiobooks, and other digital
                content that you control. You decide what to feature and where
                to place it.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-elevated space-y-3">
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                Great for locations like:
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Buses, trains and transit hubs</li>
                <li>Airports and waiting areas</li>
                <li>Hotels and hospitality partners</li>
                <li>Community centres and local businesses</li>
              </ul>
            </div>
          </section>

          {/* How does it work? */}
          <section className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm card-elevated">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              How does it work?
            </h2>
            <p className="text-muted-foreground mb-4">
              We generate a QR code and access point that&apos;s specific to your
              library. From there, it&apos;s easy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Place QR codes in Wi-Fi-enabled spaces such as public transport,
                hotels, businesses or partner venues.
              </li>
              <li>
                Add your own branded welcome message or video to greet new users.
              </li>
              <li>
                Share curated eBooks, audiobooks, newspapers or magazines—update
                them anytime from your admin portal.
              </li>
              <li>
                View usage stats and registration details for temporary access
                directly in your reporting.
              </li>
              <li>
                Users only need an email address for short-term access, making it
                fast and barrier-free.
              </li>
            </ul>
          </section>

          {/* Getting started */}
          <section className="text-center space-y-4 pt-4">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s talk about how ePopUp Library can extend your reach
              beyond the library building and into everyday spaces across your
              community.
            </p>
            <Button variant="hero" asChild size="lg">
              <a href="/demo" className="flex items-center gap-2">
                Talk to our team
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EPopup;
