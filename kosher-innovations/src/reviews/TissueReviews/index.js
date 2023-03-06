import React from "react";

const TissueReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "This [Shabbos Bathroom Tissue] is a good product because previous to using it I had to call my plumber every six weeks to unclog the toilet from the regular tissues I used.",
      author: "Z. Schwartz",
      location: "",
    },
    {
      text: "The Shabbos Bathroom Tissue is so accessible",
      author: "B. Triest",
      location: "",
    },
    {
      text: "I love it. It's amazing",
      author: "E. Brauser",
      location: "",
    },
    {
      text: "Wow! Once again you've come up with a fabulous idea. Yasher Koach!",
      author: "Susan R.",
      location: "Englewood, NJ",
    },
    {
      text: "BRILLIANT! Much success!!",
      author: "Kalman P.",
      location: "",
    },
    {
      text: "I LOVE THIS !!!",
      author: "Steve Greenberg",
      location: "Gadget Nation",
    },
    {
      text: "As an engineer involved in wastewater processing, I approve of something that'll have more people in the frum community using toilet tissue instead of facial tissue in their toilets on Shabbos.",
      author: "Concerned Engineer",
      location: "",
    },
    {
      text: "This product is needed because there should be no chilul Shabbos by anyone.",
      author: "Anonymous",
      location: "",
    },
    {
      text: "I like putting items in our home that remind us that we are Jewish and that it is Shabbos.",
      author: "Product Tester",
      location: "",
    },
    {
      text: "Sometimes we have kleenex or better quality tissues and they are more likely to stuff the toilet and it's also a waste of money.",
      author: "Product Tester",
      location: "",
    },
    {
      text: "Tissues are expensive and I dislike wasting them for the bathroom. If this product was similar in price to regular, good quality toilet paper, I would buy it.",
      author: "Product Tester",
      location: "",
    },
    {
      text: "I always aggravate my back when twisting to reach the tissue box behind me on the tank. Hanging the [Shabbos Bathroom Tissue] box on the roll holder makes so much sense! Great idea!",
      author: "Anonymous",
      location: "",
    },
  ];

  // {testimonials[index].text}
  // {testimonials[index].author}

  const TestimonialElems = () => {
    return testimonials.map((testimonial, i) => (
      <div className="review" key={i}>
        <q>{testimonial.text}</q>
        <div className="separation-line"></div>
        <h2>
          {testimonial.author}
          <br></br>
          <span>{testimonial.location}</span>
        </h2>
      </div>
    ));
  };

  return (
    <section className="reviews">
      <TestimonialElems />
    </section>
  );
};

export default TissueReviews;
