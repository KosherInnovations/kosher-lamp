import React from "react";

const DecalReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I love the Jewish Wall Decals! It's so convenient and easy to use.",
      author: "Dan",
      location: "",
    },
    {
      text: "The Jewish Wall Decals has really improved my Shabbos reading experience.",
      author: "Derek",
      location: "",
    },
    {
      text: "I love the sleek design of the Jewish Wall Decals. It's the perfect addition to my home.",
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

export default DecalReviews;
