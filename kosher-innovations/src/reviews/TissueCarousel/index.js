import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const TissueCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "This [Shabbos Bathroom Tissue] is a good product because previous to using it I had to call my plumber every six weeks to unclog the toilet from the regular tissues I used.",
      author: "Z. Schwartz",
    },
    {
      text: "The Shabbos Bathroom Tissue is so accessible",
      author: "B. Triest",
    },
    {
      text: "I love it. It's amazing",
      author: "E. Brauser",
    },
    {
      text: "Wow! Once again you've come up with a fabulous idea. Yasher Koach!",
      author: "Susan R. - Englewood, NJ",
    },
    {
      text: "BRILLIANT! Much success!!",
      author: "Kalman P.",
    },
    {
      text: "I LOVE THIS !!!",
      author: "Steve Greenberg, Gadget Nation",
    },
    {
      text: "As an engineer involved in wastewater processing, I approve of something that'll have more people in the frum community using toilet tissue instead of facial tissue in their toilets on Shabbos.",
      author: "Concerned Engineer",
    },
    {
      text: "This product is needed because there should be no chilul Shabbos by anyone.",
      author: "Anonymous",
    },
    {
      text: "I like putting items in our home that remind us that we are Jewish and that it is Shabbos.",
      author: "Product Tester",
    },
    {
      text: "Sometimes we have kleenex or better quality tissues and they are more likely to stuff the toilet and it's also a waste of money.",
      author: "Product Tester",
    },
    {
      text: "Tissues are expensive and I dislike wasting them for the bathroom. If this product was similar in price to regular, good quality toilet paper, I would buy it.",
      author: "Product Tester",
    },
    {
      text: "I always aggravate my back when twisting to reach the tissue box behind me on the tank. Hanging the [Shabbos Bathroom Tissue] box on the roll holder makes so much sense! Great idea!",
      author: "Anonymous",
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
        <p className="testimonials-p" title="Reviews">
          {testimonials[index].text}
        </p>
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

export default TissueCarousel;
