import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunProductsAnimation = () => {
  const cards = gsap.utils.toArray("#cards .card-container");
  gsap.registerPlugin(ScrollTrigger, Power3);

  if (window.matchMedia >= "900px") {
    cards.forEach((card) => {
      gsap.to(card, {
        visibility: "visible",
        ease: Power3,
        duration: 2,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          end: "bottom center",
          scrub: 2,
          once: true,
        },
      });
    });
  }
};

export default RunProductsAnimation;
