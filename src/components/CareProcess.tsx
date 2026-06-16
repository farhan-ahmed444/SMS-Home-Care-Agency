import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Home, FileText, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  { icon: Phone, title: "Initial Consultation", description: "We discuss your loved one's needs and care requirements." },
  { icon: Home, title: "In-Home Assessment", description: "Our team evaluates the environment and finalizes care details." },
  { icon: FileText, title: "Personalized Care Plan", description: "A customized plan addressing every aspect of care." },
  { icon: UserCheck, title: "Caregiver Matching", description: "We match you with a compatible, trained professional." },
  { icon: BarChart3, title: "Ongoing Monitoring", description: "Continuous quality assurance and family communication." },
];

export default function CareProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section bg-white relative overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-primary-pale/20 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            How We <span className="gradient-text">Get Started</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-lighter/70 max-w-2xl mx-auto">
            A seamless five-step process designed to provide clarity, confidence, and compassionate care.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-neutral-dark">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="h-full gradient-bg origin-left"
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.12 + 0.15, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/20 mb-5"
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <span className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-white border-2 border-primary text-primary text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-secondary mb-1.5">{step.title}</h3>
                <p className="text-xs text-secondary-lighter/60 max-w-[180px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
