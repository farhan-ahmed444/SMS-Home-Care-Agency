import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, ShieldCheck, Heart, Users, Clock } from "lucide-react";

const features = [
  { icon: Heart, label: "Trusted Caregivers" },
  { icon: Users, label: "Personalized Plans" },
  { icon: ShieldCheck, label: "Dementia Support" },
  { icon: Clock, label: "24/7 Peace of Mind" },
];

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-primary-pale">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-pale via-primary-washed to-primary-pale/80 z-10" />
        <div data-parallax data-speed="0.2" className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-lighter/10 rounded-full blur-3xl" />
        <div data-parallax data-speed="0.4" className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary-pale/30 rounded-full blur-3xl" />
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop')" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div data-reveal data-delay="0">
              <span className="badge bg-primary-pale text-primary border border-primary/10">
                <Heart className="w-3.5 h-3.5" />
                Premium Home Care Services
              </span>
            </div>

            <h1 data-reveal data-delay="0.1"
              className="text-display-sm sm:text-display-md lg:text-display font-heading text-secondary mt-6 mb-5 leading-tight"
            >
              Compassionate Care.
              <br />
              <span className="gradient-text">Comfort at Home.</span>
            </h1>

            <p data-reveal data-delay="0.2"
              className="text-lg sm:text-xl text-secondary-lighter/80 leading-relaxed max-w-xl mb-8"
            >
              Professional home care services that help seniors live safely, independently, and 
              comfortably in the place they love most.
            </p>

            <div data-reveal data-delay="0.3"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary text-base !px-7 !py-3.5">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-outline text-base !px-7 !py-3.5">
                Our Services
              </a>
            </div>

            <div data-reveal data-delay="0.4"
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/60 border border-primary-pale/30 shadow-soft">
                  <f.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-secondary">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="0.3"
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional caregiver assisting senior"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-card p-4 border border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg gradient-bg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">Licensed & Insured</p>
                    <p className="text-xs text-secondary-lighter/60">CT Registered Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
