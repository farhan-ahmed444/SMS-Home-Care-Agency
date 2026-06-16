import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          document.querySelectorAll("[data-parallax]").forEach((el) => {
            const speed = parseFloat(el.getAttribute("data-speed") || "0.3");
            gsap.to(el, {
              y: () => (1 - speed) * 150,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            });
          });
        },
      });

      const progressBars = document.querySelectorAll("[data-progress]");
      if (progressBars.length) {
        gsap.fromTo(
          progressBars,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: progressBars[0].parentElement,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);
}
