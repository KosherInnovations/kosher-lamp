import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.png";

const ShisselCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I was always afraid to give my kids to wash by the bed bc of the spills. Now- no more spills! Unbelievable! It really works!!! THANK YOU KOSHER INNIVATIONS!!",
      author: "ShisselUser - Amazon Reviewer",
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
      
        <button onClick={handlePrev} title="go to previous testimonial"><img src={carouselArrow} className="carousel-arrow prev" alt="press to go to previous testimonial" ></img ></ button>
        <button onClick={handleNext} title="go to next testimonial"><img src={carouselArrow} className="carousel-arrow next" alt="press to go to next testimonial"></img></ button>
      </div>
    </Box>
  );
};

export default ShisselCarousel;
