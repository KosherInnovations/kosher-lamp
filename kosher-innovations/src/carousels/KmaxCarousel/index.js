import React, { useState } from "react";
import carouselArrow from "../../resources/carousel-arrow.webp";

const KmaxCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I want one!",
      author: "Rabbi Stephen Baars, Washington DC",
    },
    {
      text: "A brillaint idea.",
      author: "Rabbi Chaim Feld, Cleveland",
    },
    {
      text: "Perfect to put one in each room when kids have different bed times. My daughter will be thrilled.",
      author: "Rebbetzen Judy Katsof, Monsey",
    },
    {
      text: "I want one for every room of the house.",
      author: "Rebbetzen Naomi Kahn, Givat Zeev, Israel",
    },
    {
      text: "Now I can send the kids to bed Friday night!",
      author: "Rebbetzen Chana Appel, Cleveland",
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
      text: "Incredible! My husband will be so thrilled he can sleep in the dark again.",
      author: "Suzanne Rotter, Toronto",
    },
    {
      text: "Great!",
      author: "Mimi Jankovits, Hollywood FL",
    },
    {
      text: "Been looking for something like this for years. I can’t wait to read with full light before a nice Shabbos schluff.",
      author: "Boruch Rabinowitz, Passaic",
    },
    {
      text: "I am the first generation in my family who can read the newspaper in bed on erev Shabbos! Before the KosherLamp, I had to sit at the dining room table to read, then schlep upstairs when I was tired. Now I just put the paper down and adjust the light. Thank you so much!",
      author: "J.E., Thornhill",
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
      text: "Loved using it. Very practical.",
      author: "Sheila Hecker, Toronto",
    },
    {
      text: "Excellent idea for Shabbos or during the week to replace closet and bathroom lights as nightlights.",
      author: "Laura Biren, Thornhill",
    },
    {
      text: "Now I can sleep while my wife reads.",
      author: "Kurt Stein, Philadelphia",
    },
    {
      text: "Phenomenal!",
      author: "Alan Cohen, Los Angeles",
    },
    {
      text: "Every family needs Kosherlamp for shalom bayis",
      author: "Chaya Krohn, Monsey",
    },
    {
      text: "Thank you... Your service is as good as your products -- and I love my KosherLamp. I have it on a zeiger on Shabbos and Yom Tov in our bedroom",
      author: "Haviva G.",
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
    <div className="review-box">
      <h4 className="review-text"><q>{testimonials[index].text}</q></h4>
      <div className="separation-line"></div>
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
      <h5 className="review-author">{testimonials[index].author}</h5>
    </div>
  );
};

export default KmaxCarousel;
