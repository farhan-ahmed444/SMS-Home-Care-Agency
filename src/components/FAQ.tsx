import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What home care services do you provide?",
    a: "We offer a comprehensive range including personal care assistance, companion care, dementia and Alzheimer's support, medication reminders, meal preparation, light housekeeping, respite care, and 24-hour monitoring. Each service is tailored to meet the individual needs of our clients.",
  },
  {
    q: "Do you provide dementia and Alzheimer's care?",
    a: "Yes, we specialize in dementia and Alzheimer's care. Our caregivers receive specialized training in memory care techniques, compassionate communication, and safety protocols to ensure individuals with cognitive challenges receive the highest quality of support.",
  },
  {
    q: "Are your caregivers background checked?",
    a: "Absolutely. Every caregiver at SMS Home Care Agency undergoes thorough background screening, reference checks, and comprehensive training before they are matched with any client. Your family's safety is our highest priority.",
  },
  {
    q: "Can the care services be customized?",
    a: "Yes, every care plan is completely personalized. We begin with a thorough in-home assessment and consultation to understand your loved one's unique needs, preferences, and schedule. Services can be adjusted as needs change over time.",
  },
  {
    q: "Do you offer overnight or 24-hour care?",
    a: "Yes, we offer flexible scheduling including hourly care, daily visits, overnight support, and 24-hour continuous monitoring. We work with your family to create a schedule that provides the right level of support.",
  },
  {
    q: "How do I get started with SMS Home Care?",
    a: "Getting started is simple. Contact us through our website, email, or phone to schedule a free initial consultation. We'll discuss your needs, conduct an in-home assessment, create a personalized care plan, and match you with a compatible caregiver.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="container-custom max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-heading font-semibold text-secondary pr-4 text-sm sm:text-base">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-lg gradient-bg flex items-center justify-center shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
                  <Plus className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-secondary-lighter/70 leading-relaxed text-sm sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
