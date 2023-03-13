import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunAboutAnimation = () => {
  // const cards = gsap.utils.toArray("#cards .card-container");

  gsap.registerPlugin(ScrollTrigger, Power3);

  const headers = gsap.utils.toArray("#about .ki-info h1");

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

  const paragraphs = gsap.utils.toArray("#about .ki-info .info-container");

  paragraphs.forEach((paragraph) => {
    gsap.to(paragraph.querySelector(".info-box"), {
      duration: 1.5,
      autoAlpha: 1,
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: paragraph,
        start: "top 90%",
        end: "top 90%",
        scrub: 2.5,
        once: true,
      },
    });
  });
};

export default RunAboutAnimation;
