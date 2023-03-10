import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunProductsAnimation = () => {
  // const cards = gsap.utils.toArray("#cards .card-container");

  gsap.registerPlugin(ScrollTrigger, Power3);

  if (window.matchMedia >= "900px") {
    // cards.forEach((card) => {
    //   gsap.to(card, {
    //     visibility: "visible",
    //     ease: Power3,
    //     duration: 2,
    //     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //     scrollTrigger: {
    //       trigger: card,
    //       start: "top 100%",
    //       end: "bottom center",
    //       scrub: 2,
    //       once: true,
    //     },
    //   });
    // });

    const cardContainers = document.querySelectorAll(".card-container");
    cardContainers.forEach((cardContainer) => {
      const id = cardContainer.id;
      gsap.to(`#${id}`, {
        visibility: "visible",
        ease: "power3",
        duration: 2,
        y: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 100%",
          end: "top 70%",
          scrub: 2,
          once: true,
        },
        onComplete: () => {
          document.querySelector(`#${id}`).style.clipPath = "none";
        },
      });
    });
  }
};

export default RunProductsAnimation;
