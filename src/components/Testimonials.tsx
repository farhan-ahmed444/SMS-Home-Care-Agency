import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.", role: "Daughter of Client",
    text: "SMS Home Care provided exceptional support for my mother. Their caregivers are compassionate, reliable, and truly treat clients like family. I finally have peace of mind knowing Mom is in good hands.",
  },
  {
    name: "James R.", role: "Son of Client",
    text: "The dementia care program has been transformative for my father. The caregivers are patient, knowledgeable, and communicate with us daily. I don't know what we would do without them.",
  },
  {
    name: "Maria L.", role: "Family Caregiver",
    text: "Respite care through SMS Home Care gave me the break I desperately needed. Knowing Mom was with trained professionals allowed me to recharge and be a better caregiver.",
  },
  {
    name: "Robert K.", role: "Client",
    text: "After my surgery, I needed help around the house. The team at SMS Home Care made my recovery smooth and dignified. I'm grateful for their professionalism and kindness.",
  },
  {
    name: "Patricia W.", role: "Daughter of Client",
    text: "From the initial consultation to ongoing care, everything has been seamless. The personalized care plan they created for my mother exceeded our expectations.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section bg-primary-pale/20 relative overflow-hidden">
      <div data-parallax data-speed="0.1" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-primary-pale/20 rounded-full blur-3xl" />

      <div className="container-custom">
        <div data-reveal className="text-center mb-14">
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            What Families <span className="gradient-text">Say About Us</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="card-lg text-center"
              >
                <Quote className="w-8 h-8 text-primary-lighter/40 mx-auto mb-4" />
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400" fill="#FBBF24" />
                  ))}
                </div>
                <p className="text-base sm:text-lg text-secondary-lighter/80 leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-heading font-bold text-secondary">{testimonials[current].name}</p>
                  <p className="text-sm text-secondary-lighter/50">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-neutral-dark/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-secondary-lighter" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-neutral-dark/40 hover:bg-neutral-dark/60"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-neutral-dark/30 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-secondary-lighter" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
