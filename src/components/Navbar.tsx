import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-secondary">
                SMS Home Care
              </span>
              <span className="block text-[10px] font-medium text-primary/80 tracking-wider uppercase">
                Agency LLC
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary/70 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+1"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(203) 555-0123</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Schedule Consult
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-secondary" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-secondary/70 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+1"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/5 text-primary font-medium"
                >
                  <Phone className="w-4 h-4" /> (203) 555-0123
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl gradient-bg text-white text-center font-semibold"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
