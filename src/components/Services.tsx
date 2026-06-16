import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bath,
  HeartHandshake,
  Brain,
  Pill,
  Utensils,
  Home,
  Moon,
  Bell,
} from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Personal Care Assistance",
    description: "Bathing, grooming, dressing, and hygiene support with dignity and respect.",
  },
  {
    icon: HeartHandshake,
    title: "Companion Care",
    description: "Meaningful social interaction, conversation, and engagement activities.",
  },
  {
    icon: Brain,
    title: "Dementia & Alzheimer's Care",
    description: "Specialized memory support from trained dementia-care professionals.",
  },
  {
    icon: Pill,
    title: "Medication Reminders",
    description: "Daily medication assistance to ensure proper dosage and timing.",
  },
  {
    icon: Utensils,
    title: "Meal Preparation",
    description: "Healthy meal planning and preparation based on dietary needs.",
  },
  {
    icon: Home,
    title: "Light Housekeeping",
    description: "Maintaining a clean, safe, and comfortable living environment.",
  },
  {
    icon: Moon,
    title: "Respite Care",
    description: "Temporary relief for family caregivers with flexible scheduling options.",
  },
  {
    icon: Bell,
    title: "24-Hour Monitoring",
    description: "Continuous support and supervision for clients who need around-the-clock care.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="section-padding bg-support-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Home Care</span> Services
          </h2>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            From personal care to specialized dementia support, we offer a full range of services
            tailored to your loved one's needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover:bg-white transition-all duration-300 cursor-default hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl gradient-bg p-2.5 mb-4 shadow-lg">
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
