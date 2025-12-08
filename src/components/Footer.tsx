import { Link } from "react-router-dom";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { name: "X (Twitter)", icon: Twitter, href: "https://x.com/", label: "X (Twitter)" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms and Conditions", path: "/terms-and-conditions" },
  ];

  return (
    <footer className="bg-foreground text-card">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* grid: on large screens, 5 columns like before */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold leading-tight">
                LibraryOne
              </span>
            </Link>

            <p className="text-card/70 font-body mb-6 max-w-md">
              Empowering libraries with innovative digital solutions. Access millions of eBooks,
              audiobooks, and more with our comprehensive library management platform.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ name, icon: Icon, href, label }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label || name}
                  title={label || name}
                  className="
        group relative p-2.5 rounded-full
        bg-card/10 backdrop-blur
        transition-all duration-300
        hover:bg-gradient-to-tr hover:from-primary hover:to-cyan-500
        hover:-translate-y-1 hover:scale-110
        hover:shadow-[0_0_18px_rgba(96,165,250,0.6)]
      "
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 
                       group-hover:scale-110 group-hover:text-white" />
                  <span
                    className="
          pointer-events-none absolute inset-0 rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          ring-2 ring-white/40
        "
                  />
                </a>
              ))}
            </div>

          </div>

          {/* Empty placeholders to push Contact further right on large screens */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              LibraryOne Digital Inc
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-card/70 font-body text-sm">1-800-775-1800</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-card/70 font-body text-sm">info@libraryone.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-card/70 font-body text-sm">
                  3540 Toringdon Way, Suite 200<br />
                  #391 Charlotte, NC 28277
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-card/60 font-body text-sm">
              © {currentYear} LibraryOne. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-card/60 hover:text-card font-body text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
