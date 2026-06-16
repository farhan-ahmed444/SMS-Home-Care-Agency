import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Users,
  Brain,
  Calendar,
  Shield,
  MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Tailored care plans designed around each client's unique needs, preferences, and lifestyle.",
    gradient: "from-pink-500/10 to-rose-500/10",
    iconBg: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Compassionate Caregivers",
    description: "Professional and caring staff who treat every client with the dignity and respect they deserve.",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconBg: "from-purple-500 to-violet-500",
  },
  {
    icon: Brain,
    title: "Dementia Support",
    description: "Specialized memory-care assistance from trained professionals who understand cognitive challenges.",
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "from-blue-500 to-indigo-500",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Hourly, daily, or overnight support that adapts to your family's changing needs and routines.",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconBg: "from-teal-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Strict screening, ongoing training, and full regulatory compliance for complete peace of mind.",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "from-amber-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    title: "Family Communication",
    description: "Regular updates, transparent reporting, and open dialogue between caregivers and families.",
    gradient: "from-emerald-500/10 to-green-500/10",
    iconBg: "from-emerald-500 to-green-500",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-4">
            Families Trust{" "}
            <span className="gradient-text">SMS Home Care</span>
          </h2>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            We go beyond basic care to provide a truly exceptional experience for your loved ones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-default">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.iconBg} p-3 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-secondary/60 leading-relaxed text-sm">
                  {card.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
