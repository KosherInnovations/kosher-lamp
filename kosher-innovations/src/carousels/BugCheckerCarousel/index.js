import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const BugCheckerCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "Hi!  This Bug Checker light is WONDERFUL!! It makes the task of checking greens & herbs so much easier. Thank you for developing & marketing this innovation!",
      author: "E. Kuepper",
    },
    {
      text: "The lightboard is a fabulous tool for the Kashrus observer. It is a practical, convenient, and useful way to assist in inspecting produce and preventing us from violating the very serious prohibitions of eating insects. The lightweight and compact design make it very easy to keep in the kitchen, thus making it a kitchen gadget that should be found in every Kosher kitchen.",
      author: "Rabbi Benzion Twerski, Wisconsin",
    },
    {
      text: "[The Bug Checker] is good for commercial use for the same reason it works in a private kitchen. It's small, light, portable and easy to use.",
      author: "E Prizont, mashgiach, Seattle",
    },
    {
      text: "I tried out the recipe you gave me – it was delicious, and the bug checker too, its fabulous!! Waiting to try out more of your recipes. Many Thanks",
      author: "Tzippy F.",
    },
    {
      text: "Now that I have the Kosher Innovations Bugchecker and I can see what I couldn't see before; I have to go and do Teshuva for all the bugs I've missed in the past!",
      author: "Anonymous",
    },
    {
      text: "I have been thrilled with your Kosher Lamp products, so I was very excited to purchase your Bug Checker Portable Light Board as soon as I heard about it. I have purchased two light boards, in fact - one for me, one as a gift!",
      author: "Chava N., Atlanta, GA",
    },
  ];

  // function to handle going to the next testimonial
  const handleNext = () => {
    if (index === testimonials.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // function to handle going to the previous testimonial
  const handlePrev = () => {
    if (index === 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <Box className="carousel-box">
      <h4>Reviews</h4>
      <h5 className="testimonials-text" title="Read reviews about this product">
        <p id="testimonials-p" title="Reviews">{testimonials[index].text}</p>
      </h5>
      <h5 className="author">
        <cite title="Review author">{testimonials[index].author}</cite>
      </h5>
      <div className="btn-box">
        <button onClick={handlePrev} title="go to previous testimonial">
          <img
            src={carouselArrow}
            className="carousel-arrow prev"
            alt="press to go to previous testimonial"
          ></img>
        </button>
        <button onClick={handleNext} title="go to next testimonial">
          <img
            src={carouselArrow}
            className="carousel-arrow next"
            alt="press to go to next testimonial"
          ></img>
        </button>
      </div>
    </Box>
  );
};

export default BugCheckerCarousel;
