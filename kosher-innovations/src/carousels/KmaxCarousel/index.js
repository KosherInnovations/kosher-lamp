import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const KmaxCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I love the KosherLamp MAX! It's so convenient and easy to use.",
      author: "Sarah",
    },
    {
      text: "The KosherLamp MAX has really improved my Shabbos reading experience.",
      author: "David",
    },
    {
      text: "I love the sleek design of the KosherLamp MAX. It's the perfect addition to my home.",
      author: "Rachel",
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
      <h5><q>{testimonials[index].text}</q></h5>
      <h5 className="author"><cite>{testimonials[index].author}</cite></h5>
      <div className="btn-box">
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </Box>
  );
};

export default KmaxCarousel;
