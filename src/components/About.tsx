import { motion } from "framer-motion";
import { Heart, ShieldCheck, Clock, Users, Phone, ArrowRight } from "lucide-react";

const stats = [
  { icon: Heart, value: "24/7", label: "Care Support" },
  { icon: Users, value: "100%", label: "Personalized Plans" },
  { icon: ShieldCheck, value: "100%", label: "Background Checked" },
  { icon: Clock, value: "Ongoing", label: "Quality Monitoring" },
];

export default function About() {
  return (
    <section id="about" className="section bg-primary-pale/70 relative overflow-hidden">
      <div data-parallax data-speed="0.15" className="absolute -top-40 -right-40 w-80 h-80 bg-primary-lighter/5 rounded-full blur-3xl" />
      <div data-parallax data-speed="0.3" className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-pale/20 rounded-full blur-3xl" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">About Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Dedicated to <span className="gradient-text">Exceptional Care</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-lighter/70 max-w-2xl mx-auto">
            Every family deserves peace of mind knowing their loved ones are in capable, compassionate hands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional caregiver with senior"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-card p-4 border border-primary-pale/30 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-lighter/60">Call us today</p>
                    <p className="text-sm font-bold text-secondary">(203) 555-0123</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-secondary mb-5">
              Our Story
            </h3>
            <div className="space-y-4 text-secondary-lighter/70 leading-relaxed">
              <p>
                SMS Home Care Agency LLC was founded with a simple mission: to provide
                exceptional in-home care that enables seniors to maintain their independence
                and dignity while receiving the support they need.
              </p>
              <p>
                We believe quality care begins with quality caregivers. Every member of
                our team undergoes rigorous training, background checks, and continuous
                education to ensure your loved ones receive the highest standard of
                professional care.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Personalized care plans tailored to individual needs",
                "Trained and compassionate professional caregivers",
                "Safety-focused approach with continuous monitoring",
                "Family-centered communication and transparency",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-pale flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-secondary-lighter/70">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group">
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold font-heading text-secondary">{stat.value}</p>
              <p className="text-xs text-secondary-lighter/60 mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
