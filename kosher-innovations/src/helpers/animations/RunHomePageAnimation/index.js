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

  let mm = gsap.matchMedia();
  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 1000px)", () => {
    tl.to("#home .banner-statement h1", {
      duration: 1.5,
      autoAlpha: 1,
      transform: "translateX(0) scale(1)",
    }).to(
      "#home .banner-statement h2",
      {
        duration: 1.5,
        autoAlpha: 1,
        scale: 1,
        x: 0,
      },
      0
    );
  });

  mm.add("(min-width: 400px)", () => {
    // optional
    // custom cleanup code here (runs when it STOPS matching)
    tl.to("#home .banner-statement h1", {
      duration: 1.5,
      autoAlpha: 1,
      transform: "translateY(0) scale(1)",
    }).to(
      "#home .banner-statement h2",
      {
        duration: 1.5,
        autoAlpha: 1,
        transform: "translateY(0) scale(1)",
      },
      0
    );
  });
};

export default RunAnimation;
