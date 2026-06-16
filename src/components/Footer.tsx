import { Heart, MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Personal Care Assistance",
  "Companion Care",
  "Dementia & Alzheimer's Care",
  "Medication Reminders",
  "Meal Preparation",
  "Respite Care",
  "24-Hour Monitoring",
];

const socialLinks = [
  { icon: Heart, href: "#", label: "Facebook" },
  { icon: Heart, href: "#", label: "Twitter" },
  { icon: Heart, href: "#", label: "Instagram" },
  { icon: Heart, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg">SMS Home Care</span>
                <span className="block text-[10px] font-medium text-accent/80 tracking-wider uppercase">Agency LLC</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Compassionate, professional home care services that help seniors live safely and independently.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/50 hover:text-accent transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">68 Birch Place</span>
              </li>
              <li>
                <a href="mailto:smshomecareagencyllc@gmail.com" className="flex items-start gap-3 text-white/50 hover:text-accent text-sm transition-colors">
                  <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  smshomecareagencyllc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1" className="flex items-start gap-3 text-white/50 hover:text-accent text-sm transition-colors">
                  <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  (203) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {year} SMS Home Care Agency LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-accent text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-accent text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
