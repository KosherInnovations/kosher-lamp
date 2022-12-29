import React, { useState } from "react";
import Box from "@mui/material/Box";
import carouselArrow from "../../resources/carousel-arrow.png";

const WarmTrayCarousel = () => {
  const [index, setIndex] = useState(0);

  // list of testimonials
  const testimonials = [
    {
      text: "I love this hotplate for being built with safety as the first priority. Yes it’s more money than others but after my last hotplate burned out on YT, that was the end of those crappy made hot plates. This hotplate takes time until the until itself gots hot enough to heat up good so take that into consideration if using a timer. It gets the food pretty hot. It also depends on the density of the food and whether the food is covered or not.",
      author: "Amazonuser - Amazon Reviewer",
    },
    {
      text: "Using it for four months and I love it. Very sturdy. No more hassling with crockpots which are too hot or too cold to do the job of warming. I cover the food to keep it moist. If I'm reheating and concerned about anything drying out I can put down some aluminum foil first. This shabbas warmer is super versatile and easy to clean and the electric cord is obviuosly heavy duty and has an auto emergency shutoff in case something gets too hot..so no fears of starting fires. Thank you for this it's wonderful to have perfectly heated food on Shabbas! If I had a large family I would definitely buy two. One is perfect for four people",
      author: "CR - Amazon Reviewer",
    },
    {
      text: "This is just what it promises: a good blech / plata / food warmer for Shabbat / the Jewish Sabbath. It does get pretty warm, but we use a second piece of metal on top and it's never been too warm. Just bought Techyid blech #2 because #1 failed after 3.5 years of more than weekly use. Ours is on a timer and works great. Recommended for a safe way to heat food without traditional heating appliances.",
      author: "Amital - Amazon Reviewer",
    },
    {
      text: "I bought this hot plate to keep foods hot/warm food. It works for both purposes. The hot plate does get very hot. It sits on legs so the counter doesn't get hot. It is worth noting that this can't be on where little children will reach up and touch it. It isn't heavy, big enough to hold several dishes at one time. I am happy with it and would buy it again.",
      author: "Annie - Amazon Reviewer",
    },
    {
      text: "Shabbos is so much easier with this TechYid warming tray! Warms food quickly and easily. There's plenty of space for lots of foods to warm at the same time. I love it!",
      author: "Terri Z. - Amazon Reviewer",
    },
    {
      text: "Does exactly what it is intended to do and has extra safety features. Elegant through simplicity. Just plug in and use.",
      author: "Steve - Amazon Reviewer",
    },
    {
      text: "Very good quality and gets the food to the perfect temperature",
      author: "Mk - Amazon Reviewer",
    },
    {
      text: "Plugged in. Looks great. For super hot in 5 minutes. Can’t wait to try it later this week.",
      author: "Da Reviewer - Amazon Reviewer",
    },
    {
      text: "Great hotplate! feel so comfortable with all the safety features and it does a nice job warming the food!",
      author: "Bobby - Amazon Reviewer",
    },
    {
      text: "orks beautifully. Perfect for the Shomer Shabbos home...and might be very useful for others as well.",
      author: "Avid Reader - Amazon Reviewer",
    },
    {
      text: "The best Shabbos Hotplate, very safe. So far so good.",
      author: "Cynthia - Amazon Reviewer",
    },
    {
      text: "Excellent product! Very safe and keeps food hot.",
      author: "Christopher M. Gilbert - Amazon Reviewer",
    },
    {
      text: "I later started using a thick hot plate cover similar to this (link below), placed over the warming food to keep the heat in, and it has made all the difference. Now my food gets piping hot, and I am very satisfied with this hot plate.",
      author: "Avigai - Amazon Reviewer",
    },
    {
      text: "Its safe, and efficient. Stainless steel so its easy to clean. As an electrical engineer, the item is well made and safe. As with any 'hot plate' , caution is always advised and to keep away from children.",
      author: "Steven - Amazon Reviewer",
    },
    {
      text: "We have one of these hot plates, we use it every week, and it has lasted us for years. We started off with the Kickstarter version. I wrote to the owner at some point to suggest that subsequent iterations could stand to be a little hotter. He responded right away and sent us the new version, which is hotter, and we all lived happily ever after. I love that I don't have to worry about safety issues developing invisibly on the inside if it takes a tumble, which is the case with other hotplates. This one is specifically designed to stand up to rough use.",
      author: "Felpa - Amazon Reviewer",
    },
    {
      text: "We bought this originally on Kickstarter. We have had it for years and it’s held up very well. It’s easy to clean, sturdy, safe, and halachically sound. The heating is more even than other brands.",
      author: "Mike - Amazon Reviewer",
    },
    {
      text: "I was one of the ones who signed up for it before it came out, & we are really happy with it. It doesn't get as hot as the Israeli ones, so you can put something like Challahs on directly. I love how safe it is. A lot of families in my community have it & are very happy with it. Plus, it's easy to kasher for pesach & just cover with heavy duty foil. You Can see the video of it's construction on YT.",
      author: "CRZ - Amazon Reviewer",
    },
    {
      text: "This hotplate is completely safe. One can put a solid item on the surface Shabbat morning and it will be warm when you get ready to eat it Shabbos afternoon (say about 1 PM.. Say 4 hours on the surface. You cannot put something frozen on it. Yes I did buy this, but not from Amazon. When you turn it on before shabbos you can flip the switch to test whether it is safe to use. I probably will buy a second one if it is available again from my preferred reseller.",
      author: "BK - Amazon Reviewer",
    },
    {
      text: "I love this hot plate! Very safe, stylish, does a great job of keeping food warm for shabbos. Glad I purchased it and highly recommend it.",
      author: "RoxMox - Amazon Reviewer",
    },
    {
      text: "Attractive and sturdy unit which keeps food piping hot. Large enough for soup, kugel and a few bowls of vegetables. Easy to wipe up. Very glad we bought this hot plate.",
      author: "Harry G. - Amazon Reviewer",
    },
    {
      text: "Fantastic product, use it every week. Much safer than other options I’ve used.",
      author: "Shlomo D. Kopelowitz - Amazon Reviewer",
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

export default WarmTrayCarousel;
