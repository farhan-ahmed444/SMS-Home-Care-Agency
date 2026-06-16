import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Shield, Clock, Heart, MessageCircle, Sparkles } from "lucide-react";

const features = [
  { icon: Brain, title: "Specialized Dementia Care", description: "Caregivers trained in memory care techniques and compassionate communication." },
  { icon: Shield, title: "Safety Monitoring", description: "Fall prevention, wander prevention, and secure environment management." },
  { icon: Clock, title: "Routine Management", description: "Structured daily routines that reduce confusion and provide comfort." },
  { icon: Heart, title: "Emotional Support", description: "Patient, understanding care that preserves dignity and self-worth." },
  { icon: MessageCircle, title: "Family Communication", description: "Regular updates and guidance for families navigating the dementia journey." },
  { icon: Sparkles, title: "Engaging Activities", description: "Therapeutic activities designed to stimulate cognition and promote well-being." },
];

export default function DementiaSupport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(167,139,250,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(109,40,217,0.05),transparent_50%)]" />

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Dementia & Family Support
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-4">
              Specialized{" "}
              <span className="gradient-text">Memory Care</span> Support
            </h2>
            <p className="text-secondary/70 leading-relaxed mb-8">
              Dementia and Alzheimer's require a unique approach to care. Our specially trained
              caregivers provide compassionate, patient-centered support that helps individuals
              maintain their quality of life while giving families the peace of mind they deserve.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-support-light hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg p-2 shrink-0">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary text-sm">{feature.title}</h4>
                    <p className="text-xs text-secondary/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Compassionate dementia care"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-overlay opacity-20" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-2xl max-w-[250px]">
              <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                <Heart className="w-4 h-4" fill="#6D28D9" />
                Memory Care Certified
              </div>
              <p className="text-xs text-secondary/60">
                Our caregivers complete specialized dementia care training.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
