import React from "react";

const KmaxReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I want one!",
      author: "Rabbi Stephen Baars",
      location: "Washington DC",
    },
    {
      text: "A brillaint idea.",
      author: "Rabbi Chaim Feld",
      location: "Washington DC",
    },
    {
      text: "Perfect to put one in each room when kids have different bed times. My daughter will be thrilled.",
      author: "Rebbetzen Judy Katsof",
      location: "Monsey",},
    {
      text: "I want one for every room of the house.",
      author: "Rebbetzen Naomi Kahn",
      location: "Givat Zeev, Israel",},
    {
      text: "Now I can send the kids to bed Friday night!",
      author: "Rebbetzen Chana Appel",
      location: "Cleveland",},
    {
      text: "I’m delighted with Kosherlamp!",
      author: "Rebbetzen Ahuva Zauderer",
      location: "Toronto",},
    {
      text: "My husband will so love this!",
      author: "Rebbetzen Techiya Levine",
      location: "Seattle",},
    {
      text: "Incredible! My husband will be so thrilled he can sleep in the dark again.",
      author: "Suzanne Rotter",
      location: "Toronto",},
    {
      text: "Great!",
      author: "Mimi Jankovits",
      location: "Hollywood FL",},
    {
      text: "Been looking for something like this for years. I can’t wait to read with full light before a nice Shabbos schluff.",
      author: "Boruch Rabinowitz",
      location: "Passaic",},
    {
      text: "I am the first generation in my family who can read the newspaper in bed on erev Shabbos! Before the KosherLamp, I had to sit at the dining room table to read, then schlep upstairs when I was tired. Now I just put the paper down and adjust the light. Thank you so much!",
      author: "J.E.",
      location: "Thornhill",},
    {
      text: "Fabulous idea! I love to read late.",
      author: "Frumie Silver",
      location: "Toronto",},
    {
      text: "Unbelieveable!",
      author: "Mark Halpern",
      location: "Toronto",},
    {
      text: "Loved using it. Very practical.",
      author: "Sheila Hecker",
      location: "Toronto",},
    {
      text: "Excellent idea for Shabbos or during the week to replace closet and bathroom lights as nightlights.",
      author: "Laura Biren",
      location: "Thornhill",},
    {
      text: "Now I can sleep while my wife reads.",
      author: "Kurt Stein",
      location: "Philadelphia",},
    {
      text: "Phenomenal!",
      author: "Alan Cohen",
      location: "Los Angeles",},
    {
      text: "Every family needs Kosherlamp for shalom bayis",
      author: "Chaya Krohn",
      location: "Monsey",},
    {
      text: "Thank you... Your service is as good as your products -- and I love my KosherLamp. I have it on a zeiger on Shabbos and Yom Tov in our bedroom",
      author: "Haviva G.",
      location: "",},
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

export default KmaxReviews;
