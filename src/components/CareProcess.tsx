import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Home, FileText, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  { icon: Phone, title: "Initial Consultation", description: "We discuss your loved one's needs, preferences, and care requirements." },
  { icon: Home, title: "In-Home Assessment", description: "Our team visits to evaluate the environment and finalize care details." },
  { icon: FileText, title: "Personalized Care Plan", description: "A customized plan is created to address every aspect of care." },
  { icon: UserCheck, title: "Caregiver Matching", description: "We match you with a compatible, trained professional caregiver." },
  { icon: BarChart3, title: "Ongoing Monitoring", description: "Continuous quality assurance and family communication." },
];

export default function CareProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 mb-4">
            How We{" "}
            <span className="text-accent">Get Started</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A seamless five-step process designed to provide your family with clarity, confidence, and compassionate care.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-white/10 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              className="h-full gradient-bg origin-left"
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring" }}
                    className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-primary/30 mb-4"
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-secondary text-sm font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
