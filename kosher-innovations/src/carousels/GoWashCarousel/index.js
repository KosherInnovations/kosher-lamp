import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const GoWashCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "Good size and quality. Really nice for travelers.",
      author: "Daniel M. - Amazon Reviewer",
    },
    {
      text: "Nice. So practical for travel.",
      author: "Isamar Perez - Amazon Reviewer",
    },
    {
      text: "Good size for travel and even for home use.",
      author: "	D.Pessa - Amazon Reviewer",
    },
    {
      text: "Great cup. Very compact, easy to use. I take it with me all the time, I leave it in my car.",
      author: "S. Fasten - Amazon Reviewer",
    },
    {
      text: "Very practical thank you.",
      author: "Ariel Montana - Amazon Reviewer",
    },
    {
      text: "It is a great invention. I travel weekly for work and it's small enough not to be cumbersome in my luggage but big enough to satisfy the mitzvoth.",
      author: "FlyguyATL - Amazon Reviewer",
    },
    {
      text: "Gave this as a Chanukah gift to a family member. He loved it and everyone seeing it thought it was really cool",
      author: "Nurit - Amazon Reviewer",
    },
    {
      text: "Good for travel.",
      author: "Boris",
    },
    {
      text: "Nice to carry with you",
      author: "Amazon Customer Lakewood NJ - Amazon Reviewer",
    },
    {
      text: "Unique item! High quality!!",
      author: "ShariShap - Amazon Reviewer",
    },
    {
      text: "Bought as a gift for a friend who travels often and is recently more observant. He loves that it fits in his briefcase and travels without taking up space.",
      author: "Sarah May - Amazon Reviewer",
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
        <p id="testimonials-p" title="Reviews">
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

export default GoWashCarousel;
