import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Users, Clock } from "lucide-react";

const features = [
  { icon: Heart, label: "Trusted Caregivers" },
  { icon: Users, label: "Personalized Care Plans" },
  { icon: Shield, label: "Dementia Support" },
  { icon: Clock, label: "Family Peace of Mind" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(167,139,250,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(109,40,217,0.2),transparent_50%)]" />
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 text-accent" fill="#A78BFA" />
                Premium Home Care Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6"
            >
              <span className="gradient-text">Compassionate Care.</span>
              <br />
              Comfort at Home.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Professional home care services designed to help seniors live safely,
              independently, and comfortably in the place they love most.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-white/80"
                >
                  <feature.icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                alt="Professional caregiver assisting senior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 gradient-overlay opacity-30" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary">Licensed & Insured</p>
                  <p className="text-xs text-secondary/60">CT Registered Agency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
