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
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "X (Twitter)", icon: Twitter, href: "#", label: "X (Twitter)" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">LibraryOne</span>
            </Link>

            <p className="text-sm text-card/70 mb-6 max-w-sm">
              Empowering libraries with innovative digital solutions. Access millions of eBooks,
              audiobooks and more with our advanced digital ecosystem.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ name, icon: Icon, href, label }) => (
                <a key={name} href={href} aria-label={label || name} title={label || name}
                   className="p-2.5 rounded-lg bg-card/10 hover:bg-primary/20 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-2 lg:text-right">
            <h4 className="font-semibold text-lg mb-4">
              LibraryOne Digital Inc
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex lg:justify-end gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>1-800-775-1800</span>
              </li>

              <li className="flex lg:justify-end gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@libraryone.com</span>
              </li>

              <li className="flex lg:justify-end gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>
                  3540 Toringdon Way, Suite 200<br />
                  #391 Charlotte, NC 28277
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-card/60">
            © {currentYear} LibraryOne. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-card/60">
            <Link to="/privacy-policy" className="hover:text-card transition">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-card transition">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
