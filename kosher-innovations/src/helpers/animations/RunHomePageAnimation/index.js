import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  const containers = gsap.utils.toArray('.container');

  containers.forEach((container) => {
    gsap.to(container, {
      duration: 1.5,
      autoAlpha: 1,
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: container,
        markers: true,
        // start: "top 100%",
        end: "top 90%",
        scrub: 2.5,
        once: true,
      },
    });
  });

  tl.to("#home .banner-statement h1", {
    duration: 1.5,
    autoAlpha: 1,
    scale: 1,
    x: 0,
  })
    .to(
      "#home .banner-statement h2",
      {
        duration: 1.5,
        autoAlpha: 1,
        scale: 1,
        x: 0,
      },
      0.3
    )
    .to(
      "#home .banner-statement em",
      {
        duration: 2,
        autoAlpha: 1,
        scale: 1,
        x: 0,
      },
      0.6
    )
    .to(".navbar", {
      autoAlpha: 1,
      duration: 2.5,
    });
};

export default RunAnimation;
