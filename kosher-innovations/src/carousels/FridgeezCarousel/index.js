import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.webp";

const FridgeezCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I bought your Kosher Fridgeez, I love it, I scrapped all the tape residue off my gorgeous new fridge and put the new fridgeez on, it looks so nice now and not all gungie with the tape guck that is left over from pulling the tape off every week! Thanks!",
      author: "Erin Chana G.",
    },
    {
      text: "This simple piece of velcro turned my non-Shabbos refrigerator into a Shabbos compliant refrigerator. It's perfect. I bought 2, one for the fridge and one for the freezer.",
      author: "Jay - Amazon Reviewer",
    },
    {
      text: "These velcro-based light switch Fridg-eez are very easy to install. There are three pieces: two short strips with an adhesive backing to stay attached to the fridge and one long strip with a plastic pull-tab. Just clean the areas on both sides of the light switch, let it dry and apply the small pieces of velcro to each side of the switch. The long strip holds down the light switch. Now I can turn off the light on my refrigerator by pulling the tab across the the switch. It's a convenient system and definitely works better than the masking tape I used to apply.",
      author: "Frances - Amazon Reviewer",
    },
    {
      text: "It works just as expected in the fridge, i havent used it in the freezer",
      author: "Grateful - Amazon Reviewer",
    },
    {
      text: "It is so simple to turn off lights in refrigerator on the Sabbath,Simple,but brilliant idea.",
      author: "Amazon Customer - Amazon Reviewer",
    },
    {
      text: "Easy to use and it works! Yes, it really is just Velcro but for someone like me who is not crafty this was an easy thing. Love it!",
      author: "Shay Pilnik - Amazon Reviewer",
    },
    {
      text: "It works great, saved me a lot of headaches every Friday ...",
      author: "Shlomo Frid - Amazon Reviewer",
    },
    {
      text: "Works well, so far!",
      author: "R. Mark - Amazon Reviewer",
    },
    {
      text: "Worked perfectly",
      author: "Frieda - Amazon Reviewer",
    },
    {
      text: "we thought we had bought a refrigerator with sabbath mode. When we realized it did not have sabbath mode we ordered these and they work great.",
      author: "Deborah Marks - Amazon Reviewer",
    },
    {
      text: "Easy to install and hold the light closed all shabbos. We can finally see our food again without worrying about unscrewing the light bulbs!",
      author: "Riv - Amazon Reviewer",
    },
    {
      text: "A simple little gadget; that does the job. highly recommended. Thank YOU everyone should have one of these little gadgets for their refrigerators.",
      author: "Aaron Akselrud - Amazon Reviewer",
    },
    {
      text: "It works great. I'm very satisfied. It's very easy to strap the velcro over the button every Shabbos. Makes our lives much easier.",
      author: "M. Kaplan - Amazon Reviewer",
    },
    {
      text: "Finally, a great way to turn the fridge light off for Shabbat and Yom Tov! I definitely recommend buying this product!",
      author: "S. Witztum - Amazon Reviewer",
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

export default FridgeezCarousel;
