import React from "react";

const BugCheckerReviews = () => {

  // list of testimonials
  const testimonials = [
    {
      text: "Hi!  This Bug Checker light is WONDERFUL!! It makes the task of checking greens & herbs so much easier. Thank you for developing & marketing this innovation!",
      author: "E. Kuepper",
      location: ""
    },
    {
      text: "The lightboard is a fabulous tool for the Kashrus observer. It is a practical, convenient, and useful way to assist in inspecting produce and preventing us from violating the very serious prohibitions of eating insects. The lightweight and compact design make it very easy to keep in the kitchen, thus making it a kitchen gadget that should be found in every Kosher kitchen.",
      author: "Rabbi Benzion Twerski",
      location: "Wisconsin"
    },
    {
      text: "[The Bug Checker] is good for commercial use for the same reason it works in a private kitchen. It's small, light, portable and easy to use.",
      author: "E Prizont, mashgiach",
      location: "Seattle"
    },
    {
      text: "I tried out the recipe you gave me – it was delicious, and the bug checker too, its fabulous!! Waiting to try out more of your recipes. Many Thanks",
      author: "Tzippy F.",
      location: ""
    },
    {
      text: "Now that I have the Kosher Innovations Bugchecker and I can see what I couldn't see before; I have to go and do Teshuva for all the bugs I've missed in the past!",
      author: "Anonymous",
      location: ""
    },
    {
      text: "I have been thrilled with your Kosher Lamp products, so I was very excited to purchase your Bug Checker Portable Light Board as soon as I heard about it. I have purchased two light boards, in fact - one for me, one as a gift!",
      author: "Chava N.",
      location: "Atlanta, GA"
    },
  ];

  // {testimonials[index].text}
  // {testimonials[index].author}

  const TestimonialElems = () => {
    return testimonials.map((testimonial, i) => (
      <div className="review" key={i}>
        <q>{testimonial.text}</q>
        <div className="separation-line"></div>
        <h2>{testimonial.author}<br></br><span>{testimonial.location}</span></h2>
      </div>
    ));
  };
  

  return (
    <section className="reviews">
      <TestimonialElems />
    </section>
  );
};

export default BugCheckerReviews;
