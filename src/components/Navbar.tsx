import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "bg-neutral-light/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shadow-md">
              <span className="text-white font-heading font-bold text-sm">S</span>
            </div>
            <div>
              <span className="font-heading font-bold text-base text-secondary">SMS Home Care</span>
              <span className="block text-[9px] font-medium text-primary tracking-widest uppercase leading-tight">Agency LLC</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary-lighter hover:text-primary transition-colors relative pb-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+1"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-secondary-lighter hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(203) 555-0123</span>
            </a>
            <a href="#contact" className="btn-primary text-sm !px-5 !py-2.5 hidden sm:inline-flex">
              Schedule Consult
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-secondary" /> : <Menu className="w-5 h-5 text-secondary" />}
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
            transition={{ duration: 0.25 }}
              className="lg:hidden bg-neutral-light border-t border-primary-lighter/20 overflow-hidden"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-secondary-lighter hover:text-primary hover:bg-primary/10 font-medium transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="tel:+1"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-primary/20 text-primary-light font-medium text-sm"
                >
                  <Phone className="w-4 h-4" /> (203) 555-0123
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg gradient-bg text-white text-center font-semibold text-sm"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
