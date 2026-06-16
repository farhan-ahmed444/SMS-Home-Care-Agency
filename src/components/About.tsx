import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Shield, Clock, Users, Phone } from "lucide-react";

const stats = [
  { icon: Clock, value: "24/7", label: "Care Support" },
  { icon: Users, value: "100%", label: "Personalized Care Plans" },
  { icon: Shield, value: "100%", label: "Background Checked Staff" },
  { icon: Heart, value: "Ongoing", label: "Quality Monitoring" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-support-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-4">
            Dedicated to{" "}
            <span className="gradient-text">Exceptional Care</span>
          </h2>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            Every family deserves peace of mind knowing their loved ones are in capable, compassionate hands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Professional caregiver with senior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-5 shadow-2xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-secondary/60">Call us today</p>
                  <p className="text-sm font-semibold text-secondary">(203) 555-0123</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-secondary">
                Our Story
              </h3>
              <p className="text-secondary/70 leading-relaxed">
                SMS Home Care Agency LLC was founded with a simple mission: to provide
                exceptional in-home care that enables seniors to maintain their independence
                and dignity while receiving the support they need.
              </p>
              <p className="text-secondary/70 leading-relaxed">
                We believe that quality care begins with quality caregivers. Every member of
                our team undergoes rigorous training, background checks, and continuous
                education to ensure your loved ones receive the highest standard of
                professional care.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                "Personalized care plans tailored to individual needs",
                "Trained and compassionate professional caregivers",
                "Safety-focused approach with continuous monitoring",
                "Family-centered communication and transparency",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-secondary/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xl font-bold font-heading text-secondary">{stat.value}</p>
                  <p className="text-xs text-secondary/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
