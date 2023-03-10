import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  const containers = gsap.utils.toArray(".container");
  const paragraphs = gsap.utils.toArray("#home .feature-area p");
  const lines = gsap.utils.toArray("#home .separation-line");

  containers.forEach((container) => {
    gsap.to(container, {
      duration: 1.5,
      autoAlpha: 1,
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: container,
        start: "top 100%",
        end: "top 90%",
        scrub: 2.5,
        once: true,
      },
    });
  });

  lines.forEach((line) => {
    gsap.to(line, {
      duration: 1.5,
      autoAlpha: 1,
      width: "90%",
      scrollTrigger: {
        trigger: line,
        start: "top 100%",
        end: "top 90%",
        scrub: 2.5,
        once: true,
      },
    });
  });

  gsap.to("#home .logo-container", {
    duration: 2.5,
    autoAlpha: 1,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: "#home .feature-area",
      start: "top 70%",
      end: "top 40%",
      scrub: 2.5,
      once: true,
    },
  });

  paragraphs.forEach((paragraph) => {
    gsap.to(paragraph, {
      duration: 1.5,
      autoAlpha: 1,
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: paragraph,
        start: "top 100%",
        end: "top 90%",
        scrub: 2.5,
        once: true,
      },
    });
  });

  // gsap.to("#home .feature-area p", {
  //   duration: 2.5,
  //   autoAlpha: 1,
  //   y: 0,
  //   scale: 1,
  //   scrollTrigger: {
  //     trigger: "#home .feature-area",
  //     start: "top 70%",
  //     end: "top 40%",
  //     scrub: 2.5,
  //     once: true,
  //     markers: true,
  //   },
  // });

  tl.to("#home .banner-statement h1", {
    duration: 1.5,
    autoAlpha: 1,
    transform: "translateX(0) scale(1)",
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
        transform: "translateX(0) scale(1) rotate(0)",
      },
      0.5
    )
    // .to(".navbar", {
    //   autoAlpha: 1,
    //   duration: 2.5,
    // });
};

export default RunAnimation;
