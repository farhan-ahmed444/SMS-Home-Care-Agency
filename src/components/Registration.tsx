import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, BadgeCheck, GraduationCap, Heart, Users, Star } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "Background Checked Staff", desc: "All staff undergo thorough background verification" },
  { icon: GraduationCap, label: "Ongoing Training", desc: "Continuous professional development and training" },
  { icon: Heart, label: "Quality Monitoring", desc: "Regular quality assurance assessments" },
  { icon: Users, label: "Family Satisfaction Focus", desc: "Your satisfaction is our top priority" },
];

export default function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section bg-primary-pale/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-lighter/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-pale/20 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">Trust & Compliance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Licensed, Certified, <span className="gradient-text">Trusted</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shrink-0">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary">Connecticut Registration</h3>
                <p className="text-sm text-secondary-lighter/60">State Licensed Home Care Agency</p>
              </div>
            </div>

            <div className="bg-white/70 rounded-xl p-6 border border-primary/10 mb-6">
              <p className="text-xs text-secondary-lighter/60 mb-1.5 font-medium uppercase tracking-wider">Connecticut Home Care Registration Number</p>
              <p className="text-xl sm:text-2xl font-heading font-bold text-primary tracking-wider">
                [INSERT CT REGISTRATION NUMBER]
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-secondary-lighter/60">
                <Star className="w-3.5 h-3.5 text-amber-400" fill="#FBBF24" />
                Fully compliant with Connecticut state regulations
              </div>
            </div>

            <p className="text-sm text-secondary-lighter/70 leading-relaxed">
              SMS Home Care Agency LLC is registered with the State of Connecticut Department
              of Consumer Protection as a licensed home care agency. We maintain full compliance
              with all state regulations and industry standards.
            </p>
          </motion.div>

          <div className="space-y-4">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                className="card p-5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg p-2.5 shrink-0">
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">{item.label}</h4>
                  <p className="text-xs text-secondary-lighter/60 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
