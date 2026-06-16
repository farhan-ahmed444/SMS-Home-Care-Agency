import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Daughter of Client",
    rating: 5,
    text: "SMS Home Care provided exceptional support for my mother. Their caregivers are compassionate, reliable, and truly treat clients like family. I finally have peace of mind knowing Mom is in good hands.",
  },
  {
    name: "James R.",
    role: "Son of Client",
    rating: 5,
    text: "The dementia care program has been transformative for my father. The caregivers are patient, knowledgeable, and communicate with us daily. I don't know what we would do without them.",
  },
  {
    name: "Maria L.",
    role: "Family Caregiver",
    rating: 5,
    text: "Respite care through SMS Home Care gave me the break I desperately needed. Knowing Mom was with trained professionals allowed me to recharge and be a better caregiver.",
  },
  {
    name: "Robert K.",
    role: "Client",
    rating: 5,
    text: "After my surgery, I needed help around the house. The team at SMS Home Care made my recovery smooth and dignified. I'm grateful for their professionalism and kindness.",
  },
  {
    name: "Patricia W.",
    role: "Daughter of Client",
    rating: 5,
    text: "From the initial consultation to ongoing care, everything has been seamless. The personalized care plan they created for my mother exceeded our expectations.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-support-light relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-4">
            What Families{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            Real stories from real families who trust us with their loved ones' care.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass rounded-2xl p-8 sm:p-10 shadow-2xl w-full"
              >
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400" fill="#FBBF24" />
                  ))}
                </div>
                <p className="text-lg text-secondary/80 leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-heading font-bold text-secondary">{testimonials[current].name}</p>
                  <p className="text-sm text-secondary/50">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-8"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
