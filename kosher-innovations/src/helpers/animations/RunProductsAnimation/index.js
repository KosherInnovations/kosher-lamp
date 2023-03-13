import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunProductsAnimation = () => {
  // const cards = gsap.utils.toArray("#cards .card-container");

  gsap.registerPlugin(ScrollTrigger, Power3);

  if (window.matchMedia >= "400px") {
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

    // const cardContainers = document.querySelectorAll(".card-container");
    // const cardIds = Array.from(cardContainers).map((card) => card.id);

    const gsapConfig = {
      autoAlpha: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: Power3,
      scrub: 1.5,
      once: true,
    };
    
    const onCardComplete = (card) => () => {
      card.classList.add("transition");
    };
    
    const cardContainerElems = document.querySelectorAll(".card-container");
    cardContainerElems.forEach((cardContainerElem) => {
      const card = cardContainerElem.querySelector(".card");
      gsap.to(card, {
        ...gsapConfig,
        scrollTrigger: {
          trigger: card.parentElement,
          start: "top 90%",
          end: "top 80%",
          ...gsapConfig.scrollTrigger,
        },
        onComplete: onCardComplete(card),
      });
    });
    

    // const tl = gsap.timeline();

    // cardIds.forEach((id) => {
    //   tl.to(`#${id}`, {
    //     duration: 1,
    //     autoAlpha: 1,
    //     transform: "translateY(0) scale(1)",
    //     scrollTrigger: {
    //       trigger: `#${id}`,
    //       start: "top 100%",
    //       end: "top 90%",
    //       scrub: 1.5,
    //       once: true,
    //     },
    //     onComplete: () => console.log(id),
    //   });
    // });





  }
};

export default RunProductsAnimation;
