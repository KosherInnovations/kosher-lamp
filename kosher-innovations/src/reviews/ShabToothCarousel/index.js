import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const ShabToothCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "Yasher koach! I love this idea and hope it really cleans teeth!!",
      author: "Rabbi Mendel Bluming",
    },
    {
      text: "Kids fight the whole week not to brush but on Shabbos, they can't wait to brush!",
      author: "Ari P.",
    },
    {
      text: "In regards to the Kosher Shabbos Toothbrush, I found your product amazing! As a girl with braces, brushing my teeth on Shabbos was pretty complicating. After a few people recommended the Kosher Shabbos Toothbrush, I decided to try it. The results were great! Keep up your great Innovations with Halacha being the priority!",
      author: "Hingy O.",
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
      <h4 className="review-header">Reviews</h4>
      <h5 className="testimonials-text" title="Read reviews about this product">
        <p className="testimonials-p" title="Reviews">{testimonials[index].text}</p>
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

export default ShabToothCarousel;
