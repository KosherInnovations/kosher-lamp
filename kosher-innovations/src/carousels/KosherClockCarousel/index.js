import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const KosherClockCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I am very impressed with KosherClock3, I do not have to set alarms anymore as I have 4 weekday, 4 Shabbos, and 2 Sunday alarms set. This is a superior alarm clock. Keep up the good work!",
      author: "Daniel K.",
    },
    {
      text: "I like the fact that it has the weekday alarm. The Shabbos snooze feature is great.",
      author: "Leah L.",
    },
    {
      text: "When I set my alarm on shabbat, I dont have to hear it for the rest of the day.",
      author: "Baily S.",
    },
    {
      text: "Sounds like an essential for every Jewish home!",
      author: "Ettil H.",
    },
    {
      text: "I'm in a yeshiva that the Madrichm do not wake anyone up for davening on Shabbat. Without an alarm it is really hard to get up for davening. I had the older version of the shabbos clock, but it is died due to over use. I really need a new one, this past Shabbat I almost missed Shacharit, and I don't want to again!",
      author: "Ilan R.",
    },
    {
      text: "Being able to set different alarms for different days is GREAT! So is the ability to cover up the 'snooze' button for Shabbos & Yom Tov, for those of us who like to swat our clocks in our sleep! I will surely be getting at least one of these KosherClock3 clocks.",
      author: "Steven C.",
    },
    {
      text: "After each alarm going off at a different time, with no ability to turn it off, my roommates were annoyed at the blasting 'beep-beep-beep' that could be heard through-out the dorm. This is why I want a KosherClock3. For both the convenience of the separate alarms each day, and for its' new quieter setting!",
      author: "Jonah K.",
    },
    {
      text: "I own both of the previous Shabbos alarms. This new one looks like a BIG improvement! 10 different alarms?? Gevaldik!",
      author: "Avi S.",
    },
    {
      text: "I would LOVE a Kosher Clock to wake me up for Shul on Shabbos and from my nap and.... the list just goes on and on....",
      author: "Eli K.",
    },

    {
      text: "I've been looking for an alarm clock that can be used on Shabbos - this is a wonderful item that's easy to transport (we often go away for Shabbos) & one that will be put to good use, whether for waking up in time for Shacharis, especially if we have to daven somewhere else that's further than normal, or for waking up after our Shabbos naps.",
      author: "Chumi B.",
    },
    {
      text: "I love going to Hashkamah in my shul's Beth Hamidrash which means I need to get up by 6:30. I can't think of a nicer way of being woken up for this mitzvah (as listed in Elu Dvarim) than by hearing the sound of a shabbos clock! Sitting next to my kosher lamp, it would make the perfect shabbosdik accompaniment.",
      author: "Kalman V.",
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

export default KosherClockCarousel;
