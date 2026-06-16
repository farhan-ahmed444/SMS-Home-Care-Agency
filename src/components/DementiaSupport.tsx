import { Brain, Shield, Clock, Heart, MessageCircle, Sparkles } from "lucide-react";

const features = [
  { icon: Brain, title: "Specialized Dementia Care", description: "Caregivers trained in memory care techniques and compassionate communication." },
  { icon: Shield, title: "Safety Monitoring", description: "Fall prevention, wander prevention, and secure environment management." },
  { icon: Clock, title: "Routine Management", description: "Structured daily routines that reduce confusion and provide comfort." },
  { icon: Heart, title: "Emotional Support", description: "Patient, understanding care that preserves dignity and self-worth." },
  { icon: MessageCircle, title: "Family Communication", description: "Regular updates and guidance for families navigating dementia." },
  { icon: Sparkles, title: "Engaging Activities", description: "Therapeutic activities designed to stimulate cognition and well-being." },
];

export default function DementiaSupport() {
  return (
    <section className="section bg-primary-pale/70 relative overflow-hidden">
      <div data-parallax data-speed="0.2" className="absolute inset-0 bg-gradient-to-br from-primary-pale/30 via-transparent to-primary-lighter/10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal>
            <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">Dementia & Family Support</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3 mb-5">
              Specialized <span className="gradient-text">Memory Care</span> Support
            </h2>
            <p className="text-secondary-lighter/70 leading-relaxed mb-8">
              Dementia and Alzheimer's require a unique approach to care. Our specially trained
              caregivers provide compassionate, patient-centered support that helps individuals
              maintain their quality of life while giving families the peace of mind they deserve.
            </p>

            <div data-stagger="0.06" className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.title} className="card p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg gradient-bg p-2 shrink-0">
                    <f.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">{f.title}</h4>
                    <p className="text-xs text-secondary-lighter/60 mt-0.5">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="0.15">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                  alt="Compassionate dementia care"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-card p-4 border border-primary-pale/30 max-w-[220px]">
                <div className="flex items-center gap-2 font-semibold text-primary mb-1">
                  <Heart className="w-4 h-4" fill="#6D28D9" />
                  <span className="text-sm">Memory Care Certified</span>
                </div>
                <p className="text-xs text-secondary-lighter/60">
                  Our caregivers complete specialized dementia care training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
