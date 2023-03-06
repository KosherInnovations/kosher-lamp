import React from "react";

const GloveReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I love the Shabbos Scrub Gloves! It's so convenient and easy to use.",
      author: "Dan",
      location: "",
    },
    {
      text: "The Shabbos Scrub Gloves has really improved my Shabbos reading experience.",
      author: "Derek",
      location: "",
    },
    {
      text: "I love the sleek design of the Shabbos Scrub Gloves. It's the perfect addition to my home.",
      author: "Rani",
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

export default GloveReviews;
