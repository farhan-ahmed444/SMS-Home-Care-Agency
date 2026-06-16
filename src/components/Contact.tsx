import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  careNeeds: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  careNeeds: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.careNeeds.trim()) newErrors.careNeeds = "Please select care needs";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 mb-4">
            Let's Discuss Your{" "}
            <span className="text-accent">Care Needs</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Reach out today for a free consultation. We're here to answer your questions and help you find the perfect care solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Our Address</p>
                    <p className="text-sm text-secondary/60">68 Birch Place</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Email Us</p>
                    <a href="mailto:smshomecareagencyllc@gmail.com" className="text-sm text-primary hover:text-accent transition-colors">
                      smshomecareagencyllc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Call Us</p>
                    <p className="text-sm text-secondary/60">(203) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-secondary mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-secondary/60">Monday - Friday</span>
                  <span className="font-medium text-secondary">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary/60">Saturday</span>
                  <span className="font-medium text-secondary">9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary/60">Sunday</span>
                  <span className="font-medium text-secondary">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary`}
                    placeholder="(203) 555-0123"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="careNeeds" className="block text-sm font-medium text-secondary mb-1.5">
                  Care Needs *
                </label>
                <select
                  id="careNeeds"
                  value={form.careNeeds}
                  onChange={(e) => setForm({ ...form, careNeeds: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.careNeeds ? "border-red-400" : "border-gray-200"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary`}
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
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.message ? "border-red-400" : "border-gray-200"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-secondary resize-none`}
                  placeholder="Tell us about your care needs..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 rounded-xl gradient-bg text-white font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request Consultation
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
