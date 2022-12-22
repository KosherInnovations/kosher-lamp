import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const BugCheckerCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "This is WONDERFUL!! It makes the task of checking greens & herbs so much easier. Thank you for developing & marketing this innovation!",
      author: "E. Kuepper",
    },
    {
      text: "(The Bug Checker) is good for commercial use for the same reason it works in a private kitchen. It's small, light, portable and easy to use.",
      author: "E Prizont, Mashgiach. Seattle",
    },
    {
      text: "Now that I have the Kosher Innovations Bugchecker and I can see what I couldn't see before; I have to go and do Teshuva for all the bugs I've missed in the past!",
      author: "Anonymous",
    },
    {
      text: "A fabulous tool for the Kashrus observer. It is a practical, convenient, and useful way to assist in inspecting produce and preventing us from violating the very serious prohibitions of eating insects. The lightweight and compact design make it very easy to keep in the kitchen, thus making it a kitchen gadget that should be found in every Kosher kitchen.",
      author: "Rabbi Benzion Twerski, Milwaukee Wisconsin",
    },
    {
      text: "I have been thrilled with your Kosher Lamp products, so I was very excited to purchase your Bug Checker Portable Light Board as soon as I heard about it. I have purchased two light boards, in fact - one for me, one as a gift",
      author: "Chava N, Atlanta, GA",
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
      <h5 className="testimonials-text">
        <q>{testimonials[index].text}</q>
      </h5>
      <h5 className="author">
        <cite>{testimonials[index].author}</cite>
      </h5>
      <div className="btn-box">
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </Box>
  );
};

export default BugCheckerCarousel;
