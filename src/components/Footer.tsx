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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[60rem] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <div>
                <span className="font-heading font-bold text-white text-base">SMS Home Care</span>
                <span className="block text-[9px] font-medium text-primary-lighter/60 tracking-widest uppercase leading-tight">Agency LLC</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Compassionate, professional home care services that help seniors live safely and independently.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-primary-lighter text-sm transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/40 hover:text-primary-lighter text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-lighter/60 shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm">68 Birch Place</span>
              </li>
              <li>
                <a href="mailto:smshomecareagencyllc@gmail.com" className="flex items-start gap-2.5 text-white/40 hover:text-primary-lighter text-sm transition-colors">
                  <Mail className="w-4 h-4 text-primary-lighter/60 shrink-0 mt-0.5" />
                  smshomecareagencyllc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1" className="flex items-start gap-2.5 text-white/40 hover:text-primary-lighter text-sm transition-colors">
                  <Phone className="w-4 h-4 text-primary-lighter/60 shrink-0 mt-0.5" />
                  (203) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; {year} SMS Home Care Agency LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-white/30 hover:text-primary-lighter text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-primary-lighter text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
