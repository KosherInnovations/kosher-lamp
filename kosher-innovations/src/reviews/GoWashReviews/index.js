import React from "react";

const GoWashReviews = () => {

  // list of testimonials
  const testimonials = [
    {
      text: "Good size and quality. Really nice for travelers.",
      author: "Daniel M.",
      location: ""
    },
    {
      text: "Nice. So practical for travel.",
      author: "Isamar Perez",
      location: ""},
    {
      text: "Good size for travel and even for home use.",
      author: "	D.Pessa",
      location: ""},
    {
      text: "Great cup. Very compact, easy to use. I take it with me all the time, I leave it in my car.",
      author: "S. Fasten",
      location: ""},
    {
      text: "Very practical thank you.",
      author: "Ariel Montana",
      location: ""},
    {
      text: "It is a great invention. I travel weekly for work and it's small enough not to be cumbersome in my luggage but big enough to satisfy the mitzvoth.",
      author: "FlyguyATL",
      location: ""},
    {
      text: "Gave this as a Chanukah gift to a family member. He loved it and everyone seeing it thought it was really cool",
      author: "Nurit",
      location: ""},
    {
      text: "Good for travel.",
      author: "Boris",
      location: ""},
    {
      text: "Nice to carry with you",
      author: "Amazon Customer",
      location: "Lakewood NJ"},
    {
      text: "Unique item! High quality!!",
      author: "ShariShap",
      location: ""},
    {
      text: "Bought as a gift for a friend who travels often and is recently more observant. He loves that it fits in his briefcase and travels without taking up space.",
      author: "Sarah May",
      location: ""},
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

export default GoWashReviews;
