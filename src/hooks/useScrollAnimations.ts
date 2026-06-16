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
              y: () => (1 - speed) * window.innerHeight * 0.2,
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

      document.querySelectorAll("[data-reveal]").forEach((el) => {
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        gsap.fromTo(
          el,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      document.querySelectorAll("[data-stagger]").forEach((container) => {
        const children = container.children;
        const staggerVal = parseFloat(container.getAttribute("data-stagger") || "0.08");
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: staggerVal,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = parseInt(el.getAttribute("data-count") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(parseFloat(el.textContent || "0")) + suffix;
            },
          }
        );
      });

      document.querySelectorAll("[data-scale-in]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      ScrollTrigger.batch("[data-fade-children]", {
        start: "top 80%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" }
          ),
      });

      document.querySelectorAll("[data-progress]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
