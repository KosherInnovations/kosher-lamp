import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.png";

const GoWashCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I love the Go Wash! It's so convenient and easy to use.",
      author: "Dan",
    },
    {
      text: "The Go Wash has really improved my Shabbos reading experience.",
      author: "Derek",
    },
    {
      text: "I love the sleek design of the Go Wash. It's the perfect addition to my home.",
      author: "Rani",
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
      
        <button onClick={handlePrev} title="go to previous testimonial"><img src={carouselArrow} className="carousel-arrow prev" alt="press to go to previous testimonial" ></img ></ button>
        <button onClick={handleNext} title="go to next testimonial"><img src={carouselArrow} className="carousel-arrow next" alt="press to go to next testimonial"></img></ button>
      </div>
    </Box>
  );
};

export default GoWashCarousel;
