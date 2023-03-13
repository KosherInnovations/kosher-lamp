import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const RunAboutAnimation = () => {
  // const cards = gsap.utils.toArray("#cards .card-container");

  gsap.registerPlugin(ScrollTrigger, Power3);

  const headers = gsap.utils.toArray("#about .ki-info h1");

  headers.forEach((header) => {
    gsap.to(header, {
      duration: 0.5,
      autoAlpha: 1,
      y: 0,
      scale: 1,
      scrollTrigger: {
        trigger: header,
        start: "top 100%",
        end: "top 90%",
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
        start: "top 100%",
        end: "top 80%",
        scrub: 2.5,
        once: true,
        markers: true,
      },
    });
  });
};

export default RunAboutAnimation;
