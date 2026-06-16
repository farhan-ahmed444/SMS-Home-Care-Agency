import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, BadgeCheck, GraduationCap, Heart, Users, Star } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "Background Checked Staff" },
  { icon: GraduationCap, label: "Ongoing Training" },
  { icon: Heart, label: "Quality Monitoring" },
  { icon: Users, label: "Family Satisfaction Focus" },
];

export default function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Trust & Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-4">
            Licensed, Certified,{" "}
            <span className="gradient-text">Trusted</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 shadow-2xl border border-primary/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-secondary">
                  Connecticut Registration
                </h3>
                <p className="text-sm text-secondary/60">State Licensed Home Care Agency</p>
              </div>
            </div>

            <div className="bg-support-light rounded-xl p-6 border border-primary/10">
              <p className="text-sm text-secondary/60 mb-2">Connecticut Home Care Registration Number</p>
              <p className="text-2xl font-heading font-bold text-primary tracking-wider">
                [INSERT CT REGISTRATION NUMBER]
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-secondary/60">
                <Star className="w-4 h-4 text-amber-400" fill="#FBBF24" />
                Fully compliant with Connecticut state regulations
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm text-secondary/60 leading-relaxed">
                SMS Home Care Agency LLC is registered with the State of Connecticut Department
                of Consumer Protection as a licensed home care agency. We maintain full compliance
                with all state regulations and industry standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg p-2.5 shrink-0">
                  <item.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">{item.label}</h4>
                  <p className="text-xs text-secondary/60">
                    {i === 0 && "All staff undergo thorough background verification"}
                    {i === 1 && "Continuous professional development and training"}
                    {i === 2 && "Regular quality assurance assessments"}
                    {i === 3 && "Your satisfaction is our top priority"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
