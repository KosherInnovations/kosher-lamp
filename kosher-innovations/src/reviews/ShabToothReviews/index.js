import React from "react";

const ShabToothReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "Yasher koach! I love this idea and hope it really cleans teeth!!",
      author: "Rabbi Mendel Bluming",
      location: "",
    },
    {
      text: "Kids fight the whole week not to brush but on Shabbos, they can't wait to brush!",
      author: "Ari P.",
      location: "",
    },
    {
      text: "In regards to the Kosher Shabbos Toothbrush, I found your product amazing! As a girl with braces, brushing my teeth on Shabbos was pretty complicating. After a few people recommended the Kosher Shabbos Toothbrush, I decided to try it. The results were great! Keep up your great Innovations with Halacha being the priority!",
      author: "Hingy O.",
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

export default ShabToothReviews;
