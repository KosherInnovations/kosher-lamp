import React from "react";

const ShroomReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I love the Mushroom KosherLamp! It's so convenient and easy to use.",
      author: "Dan",
      lca: "",
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

export default ShroomReviews;
