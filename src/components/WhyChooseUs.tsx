import {
  Heart, Users, Brain, Calendar, ShieldCheck, MessageCircle,
} from "lucide-react";

const cards = [
  {
    icon: Heart, title: "Personalized Care",
    description: "Tailored care plans designed around each client's unique needs, preferences, and lifestyle.",
    color: "from-primary to-primary-light",
    bgLight: "bg-primary-pale/60",
  },
  {
    icon: Users, title: "Compassionate Caregivers",
    description: "Professional and caring staff who treat every client with the dignity and respect they deserve.",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
  },
  {
    icon: Brain, title: "Dementia Support",
    description: "Specialized memory-care assistance from trained professionals who understand cognitive challenges.",
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
  },
  {
    icon: Calendar, title: "Flexible Scheduling",
    description: "Hourly, daily, or overnight support that adapts to your family's changing needs and routines.",
    color: "from-teal-500 to-cyan-500",
    bgLight: "bg-teal-50",
  },
  {
    icon: ShieldCheck, title: "Safety & Compliance",
    description: "Strict screening, ongoing training, and full regulatory compliance for complete peace of mind.",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
  },
  {
    icon: MessageCircle, title: "Family Communication",
    description: "Regular updates, transparent reporting, and open dialogue between caregivers and families.",
    color: "from-emerald-500 to-green-500",
    bgLight: "bg-emerald-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-primary-washed relative overflow-hidden">
      <div data-parallax data-speed="0.15" className="absolute top-40 left-0 w-72 h-72 bg-primary-pale/30 rounded-full blur-3xl" />
      <div data-parallax data-speed="0.25" className="absolute bottom-40 right-0 w-72 h-72 bg-primary-lighter/10 rounded-full blur-3xl" />

      <div className="container-custom">
        <div data-reveal className="text-center mb-16">
          <span className="badge bg-primary-pale text-primary border border-primary/10 mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-3">
            Families Trust <span className="gradient-text">SMS Home Care</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-lighter/70 max-w-2xl mx-auto">
            We go beyond basic care to provide a truly exceptional experience for your loved ones.
          </p>
        </div>

        <div data-stagger="0.08" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group card p-6 sm:p-7 cursor-default relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${card.bgLight} rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-2.5 mb-4 shadow-md`}>
                  <card.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-2">{card.title}</h3>
                <p className="text-sm text-secondary-lighter/70 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
