import React from "react";

const ShisselReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I was always afraid to give my kids to wash by the bed bc of the spills. Now- no more spills! Unbelievable! It really works!!! THANK YOU KOSHER INNIVATIONS!!",
      author: "ShisselUser",
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

export default ShisselReviews;
