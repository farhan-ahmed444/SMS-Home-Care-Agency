import { motion } from "framer-motion";
import {
  Heart, Users, Brain, Calendar, ShieldCheck, MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: Heart, title: "Personalized Care",
    description: "Tailored care plans designed around each client's unique needs, preferences, and lifestyle.",
    color: "from-primary to-primary-light",
    bgLight: "bg-primary/20",
  },
  {
    icon: Users, title: "Compassionate Caregivers",
    description: "Professional and caring staff who treat every client with the dignity and respect they deserve.",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-900/30",
  },
  {
    icon: Brain, title: "Dementia Support",
    description: "Specialized memory-care assistance from trained professionals who understand cognitive challenges.",
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-900/30",
  },
  {
    icon: Calendar, title: "Flexible Scheduling",
    description: "Hourly, daily, or overnight support that adapts to your family's changing needs and routines.",
    color: "from-teal-500 to-cyan-500",
    bgLight: "bg-teal-900/30",
  },
  {
    icon: ShieldCheck, title: "Safety & Compliance",
    description: "Strict screening, ongoing training, and full regulatory compliance for complete peace of mind.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-900/30",
  },
  {
    icon: MessageCircle, title: "Family Communication",
    description: "Regular updates, transparent reporting, and open dialogue between caregivers and families.",
    color: "from-emerald-500 to-green-500",
    bgLight: "bg-emerald-900/30",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-neutral-dark relative overflow-hidden">
      <div data-parallax data-speed="0.15" className="absolute top-40 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div data-parallax data-speed="0.25" className="absolute bottom-40 right-0 w-72 h-72 bg-primary-lighter/5 rounded-full blur-3xl" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-dark mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Families Trust <span className="gradient-text">SMS Home Care</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-lighter/70 max-w-2xl mx-auto">
            We go beyond basic care to provide a truly exceptional experience for your loved ones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group card p-6 sm:p-7 cursor-default relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${card.bgLight} rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150 opacity-20`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-2.5 mb-4 shadow-md`}>
                  <card.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-2">{card.title}</h3>
                <p className="text-sm text-secondary-lighter/70 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
