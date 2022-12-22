import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const TravelCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I want one for every room of the house.",
      author: "Rebbetzen Naomi Kahn, Givat Zeev, Israel",
    },
    {
      text: "I’m delighted with Kosherlamp!",
      author: "Rebbetzen Ahuva Zauderer, Toronto",
    },
    {
      text: "My husband will so love this!",
      author: "Rebbetzen Techiya Levine, Seattle",
    },
    {
      text: "Been looking for something like this for years. I can’t wait to read with full light before a nice Shabbos schluff.",
      author: "Boruch Rabinowitz, Passaic",
    },
    {
      text: "Excellent idea for Shabbos or during the week to replace closet and bathroom lights as nightlights.",
      author: "Laura Biren, Thornhill",
    },
    {
      text: "Incredible! My husband will be so thrilled he can sleep in the dark again.",
      author: "Suzanne Rotter, Toronto",
    },
    {
      text: "Fabulous idea! I love to read late.",
      author: "Frumie Silver, Toronto",
    },
    {
      text: "Unbelieveable!",
      author: "Mark Halpern, Toronto",
    },
    {
      text: "Now I can sleep while my wife reads.",
      author: "Kurt Stein, Philadelphia",
    },
    {
      text: "Now I can sleep while my wife reads.",
      author: "Kurt Stein, Philadelphia",
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
      <h5 className="testimonials-text"><q>{testimonials[index].text}</q></h5>
      <h5 className="author"><cite>{testimonials[index].author}</cite></h5>
      <div className="btn-box">
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </Box>
  );
};

export default TravelCarousel;
