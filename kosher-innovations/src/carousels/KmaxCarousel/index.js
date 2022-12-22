import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const KmaxCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "You should know that the Kosher Lamp is my gift of choice to Kallas and new moms! They are so appreciative. It brings real oneg to our Shabbat!",
      author: "Yehudit S.",
    },
    {
      text: "Rabbi Veffer with his Kosherlamp is providing a great service by making Shabbos observance easier for the Jewish People.",
      author: "Rabbi Ari Kahn, Givat Zeev, Israel",
    },
    {
      text: "Every family needs Kosherlamp for shalom bayis",
      author: "Chaya Krohn, Monsey",
    },
    {
      text: "Shabbos never looked brighter!",
      author: "Rabbi Shraga Simmons, Jerusalem",
    },
    {
      text: "Now I can read in bed Friday night.",
      author: "Rabbi Mitch Mandel, Thornhill",
    },
    {
      text: "Perfect to put one in each room when kids have different bed times. My daughter will be thrilled.",
      author: "Rebbetzen Judy Katsof, Monsey",
    },
    {
      text: "The Almighty gives us Shabbos for “Oneg” (pleasure). The Rambam says this is light. Beautiful!",
      author: "Rabbi Yonah Yaffe, Jerusalem",
    },
    {
      text: "That’s neat. My wife will love it.",
      author: "Rabbi Yitzchok Lowenbrau, Baltimore",
    },
    {
      text: "You've really made Shalom Bayis. My boys always fought when going to sleep. ",
      author: "Faigie M.",
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
