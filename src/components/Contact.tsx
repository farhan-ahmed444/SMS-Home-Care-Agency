import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  careNeeds: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", phone: "", careNeeds: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.careNeeds.trim()) e.careNeeds = "Please select care needs";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-primary-pale/70 relative overflow-hidden">
      <div data-parallax data-speed="0.15" className="absolute top-0 right-0 w-80 h-80 bg-primary-lighter/5 rounded-full blur-3xl" />
      <div data-parallax data-speed="0.3" className="absolute bottom-0 left-0 w-60 h-60 bg-primary-pale/20 rounded-full blur-3xl" />

      <div className="container-custom">
        <div data-reveal className="text-center mb-14">
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Let's Discuss Your <span className="gradient-text">Care Needs</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-lighter/70 max-w-2xl mx-auto">
            Reach out today for a free consultation. We're here to answer your questions and help you find the perfect care solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div data-reveal data-delay="0.1"
            className="lg:col-span-2 space-y-5"
          >
            <div className="card-lg">
              <h3 className="text-lg font-heading font-bold text-secondary mb-5">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">Our Address</p>
                    <p className="text-sm text-secondary-lighter/70">68 Birch Place</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">Email Us</p>
                    <a href="mailto:smshomecareagencyllc@gmail.com" className="text-sm text-primary hover:text-primary-light transition-colors break-all">
                      smshomecareagencyllc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">Call Us</p>
                    <p className="text-sm text-secondary-lighter/70">(203) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-lg">
              <h3 className="text-lg font-heading font-bold text-secondary mb-4">Office Hours</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-lighter/70">Monday - Friday</span>
                  <span className="font-medium text-secondary">8:00 AM - 6:00 PM</span>
                </div>
                <div className="border-t border-neutral-dark/20" />
                <div className="flex justify-between items-center">
                  <span className="text-secondary-lighter/70">Saturday</span>
                  <span className="font-medium text-secondary">9:00 AM - 3:00 PM</span>
                </div>
                <div className="border-t border-neutral-dark/20" />
                <div className="flex justify-between items-center">
                  <span className="text-secondary-lighter/70">Sunday</span>
                  <span className="font-medium text-secondary">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal data-delay="0.15"
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-lg space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">Full Name *</label>
                <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/70 border ${errors.name ? "border-red-400" : "border-neutral-dark/40"} focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-secondary text-sm`}
                  placeholder="Your full name" />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">Email Address *</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 border ${errors.email ? "border-red-400" : "border-neutral-dark/40"} focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-secondary text-sm`}
                    placeholder="your@email.com" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">Phone Number *</label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/70 border ${errors.phone ? "border-red-400" : "border-neutral-dark/40"} focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-secondary text-sm`}
                    placeholder="(203) 555-0123" />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="careNeeds" className="block text-sm font-medium text-secondary mb-1.5">Care Needs *</label>
                <select id="careNeeds" value={form.careNeeds} onChange={(e) => setForm({ ...form, careNeeds: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/70 border ${errors.careNeeds ? "border-red-400" : "border-neutral-dark/40"} focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-secondary text-sm`}
                >
                  <option value="">Select care needs...</option>
                  <option value="personal-care">Personal Care Assistance</option>
                  <option value="companion-care">Companion Care</option>
                  <option value="dementia-care">Dementia & Alzheimer's Care</option>
                  <option value="respite-care">Respite Care</option>
                  <option value="24-hour-care">24-Hour Monitoring</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
                {errors.careNeeds && <p className="text-red-400 text-xs mt-1">{errors.careNeeds}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5">Message *</label>
                <textarea id="message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white/70 border ${errors.message ? "border-red-400" : "border-neutral-dark/40"} focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-secondary text-sm resize-none`}
                  placeholder="Tell us about your care needs..." />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" disabled={status === "loading" || status === "success"}
                className="btn-primary text-base !py-3.5 w-full">
                {status === "loading" ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle className="w-5 h-5" /> Message Sent!</>
                ) : (
                  <><Send className="w-5 h-5" /> Request Consultation</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
