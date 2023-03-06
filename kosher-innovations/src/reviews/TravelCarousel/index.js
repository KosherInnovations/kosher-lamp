import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const TravelCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "Thought you'd get a kick out of this: We no longer call our light the Kosher Lamp - we call it the Ner Tamid because it's so convenient to use during the week when only one of us wants to stay up reading that we keep it on all week long!",
      author: "Ayelet M.",
    },
    {
      text: "You should know that the Kosher Lamp is my gift of choice to Kallas and new moms! They are so appreciative. It brings real oneg to our Shabbat! shanna tova umtuka.",
      author: "Yehudit S",
    },
    {
      text: "I really like those KosherLamps! We have one and will hopefully get another sometime. I have used it in the kids' room to allow bedtime stories and whaterver else we need, and for reading in my room, when we have guests, etc...They are very low watt energy saver bulbs, and so convenient!",
      author: "A.M.",
    },
    {
      text: "[the KosherLamp] doesn't overheat. It doesn't add a significant amount to your electric bill if you keep it on. Once you use a KosherLamp, it's hard to ever go back.",
      author: "imamother participant",
    },
    {
      text: "Having a KosherLamp is definitely a lot more convenient than having a lamp in the bedroom with a timer. I thought it was a silly invention until I got a KosherLamp for a wedding gift. Now we have two in the bedroom and I'm lost when we forget to turn it on before Shabbos.",
      author: "D.",
    },
    {
      text: "I think the Kosher Lamp is the world's greatest invention!",
      author: "J.G.",
    },
    {
      text: "I L-O-V-E my kosher lamp!!",
      author: "Jennifer W.",
    },
    {
      text: "Dear Kosher Lamp, We love your lamp because it gives us light on Shabbos. Thank you for making it. We used to have it in our old house in Yerushalayim and we loved it so much! Our grandparents have it also in every guest room.",
      author: "Zehava and Tova G.",
    },
    {
      text: "Night lights have always been a problem - very scary for my three year old. We found the solution with the Teddy Lamp. It doesn't make scary shadows. My child loves it!",
      author: "Mindy C.",
    },
    {
      text: "You've really made Shalom Bayis. My boys always fought when going to sleep. One likes it dark to sleep and the other likes to read. The KosherLamp solved the problem. Who would have thought something I bought for Shabbos would be so useful during the week too. Thank you for a wonderful invention.",
      author: "Faigie M.",
    },
    {
      text: "I don't know where you get such innovative and practical ideas, but keep up the great product development.  Your products enhance our enjoyment of Shabbos and Yom Tov!  Your lamps, clock, and other items address real needs in a simple, yet halachically appropriate way.  Thank you so much!",
      author: "Malka L. Caplan, Baltimore MD",
    },
    {
      text: "Rabbi Veffer with his Kosherlamp is providing a great service by making Shabbos observance easier for the Jewish People.",
      author: "Rabbi Ari Kahn, Givat Zeev, Israel",
    },
    {
      text: "That’s neat. My wife will love it.",
      author: "Rabbi Yitzchok Lowenbrau, Baltimore",
    },
    {
      text: "Shabbos never looked brighter!",
      author: "Rabbi Shraga Simmons, Jerusalem",
    },
    {
      text: "It’s no different than closing the closet door, it’s just better!",
      author: "Rabbi Yitzchak Kalsmith, New York",
    },
    {
      text: "Now I can read in bed Friday night.",
      author: "Rabbi Mitch Mandel, Thornhill",
    },
    {
      text: "I think it’s great. Simple, elegant and revolutionary for the Shomer Shabbos family.",
      author: "Rabbi Yitzchak Coopersmith, Jerusalem",
    },
    {
      text: "It’s brilliant!",
      author: "Rabbi Naftali Schiff, London",
    },
    {
      text: "The Almighty gives us Shabbos for “Oneg” (pleasure). The Rambam says this is light. Beautiful!",
      author: "Rabbi Yonah Yaffe, Jerusalem",
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

export default TravelCarousel;
