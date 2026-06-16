import { motion } from "framer-motion";
import {
  Bath, HeartHandshake, Brain, Pill, Utensils, Home, Moon, Bell,
} from "lucide-react";

const services = [
  { icon: Bath, title: "Personal Care Assistance", description: "Bathing, grooming, dressing, and hygiene support with dignity and respect." },
  { icon: HeartHandshake, title: "Companion Care", description: "Meaningful social interaction, conversation, and engagement activities." },
  { icon: Brain, title: "Dementia & Alzheimer's Care", description: "Specialized memory support from trained dementia-care professionals." },
  { icon: Pill, title: "Medication Reminders", description: "Daily medication assistance to ensure proper dosage and timing." },
  { icon: Utensils, title: "Meal Preparation", description: "Healthy meal planning and preparation based on dietary needs." },
  { icon: Home, title: "Light Housekeeping", description: "Maintaining a clean, safe, and comfortable living environment." },
  { icon: Moon, title: "Respite Care", description: "Temporary relief for family caregivers with flexible scheduling." },
  { icon: Bell, title: "24-Hour Monitoring", description: "Continuous support and supervision for around-the-clock care." },
];

export default function Services() {
  return (
    <section id="services" className="section bg-neutral-dark relative overflow-hidden">
      <div data-parallax data-speed="0.15" className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div data-parallax data-speed="0.3" className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-dark mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Comprehensive <span className="gradient-text">Home Care</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-lighter/70 max-w-2xl mx-auto">
            From personal care to specialized dementia support, we offer a full range of services tailored to your loved one's needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group card p-6 cursor-default hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl gradient-bg p-2.5 mb-4 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <s.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-base font-heading font-bold text-secondary mb-2">{s.title}</h3>
              <p className="text-xs text-secondary-lighter/70 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
