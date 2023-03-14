import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunAboutAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, Power3);

  const headers = gsap.utils.toArray("#about .ki-info h1");
  const lines = gsap.utils.toArray("#about .separation-line");
  const [leftSides, rightSides] = [
    gsap.utils.toArray("#about .info-left"),
    gsap.utils.toArray("#about .info-right"),
  ];

  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 1000px)", () => {
    headers.forEach((header) => {
      gsap.to(header, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 130%",
          end: "top 95%",
          once: true,
        },
      });
    });

    lines.forEach((line) => {
      gsap.to(line, {
        duration: 1.5,
        autoAlpha: 1,
        width: "100%",
        scrollTrigger: {
          trigger: line,
          start: "top 70%",
          end: "top 60%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    [leftSides, rightSides].forEach((sides) => {
      sides.forEach((el) => {
        gsap.to(el, {
          duration: 1.5,
          autoAlpha: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 90%",
            scrub: 2.5,
            once: true,
          },
        });
      });
    });
  });

  mm.add("(max-width: 1000px)", () => {
    headers.forEach((header) => {
      gsap.to(header, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: header,
          start: "top 100%",
          end: "top 95%",
          once: true,
        },
      });
    });

    lines.forEach((line) => {
      gsap.to(line, {
        duration: 1.5,
        autoAlpha: 1,
        width: "100%",
        scrollTrigger: {
          trigger: line,
          start: "top 70%",
          end: "top 60%",
          scrub: 2.5,
          once: true,
        },
      });
    });

    [leftSides, rightSides].forEach((sides) => {
      sides.forEach((el) => {
        gsap.to(el, {
          duration: 1.5,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 95%",
            scrub: 2.5,
            once: true,
          },
        });
      });
    });
  });
};

export default RunAboutAnimation;
