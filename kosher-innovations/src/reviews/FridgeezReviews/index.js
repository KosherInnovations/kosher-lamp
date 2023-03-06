import React from "react";

const FridgeezReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I bought your Kosher Fridgeez, I love it, I scrapped all the tape residue off my gorgeous new fridge and put the new fridgeez on, it looks so nice now and not all gungie with the tape guck that is left over from pulling the tape off every week! Thanks!",
      author: "Erin Chana G.",
      location: "",
    },
    {
      text: "This simple piece of velcro turned my non-Shabbos refrigerator into a Shabbos compliant refrigerator. It's perfect. I bought 2, one for the fridge and one for the freezer.",
      author: "Jay",
      location: "",
    },
    {
      text: "These velcro-based light switch Fridg-eez are very easy to install. There are three pieces: two short strips with an adhesive backing to stay attached to the fridge and one long strip with a plastic pull-tab. Just clean the areas on both sides of the light switch, let it dry and apply the small pieces of velcro to each side of the switch. The long strip holds down the light switch. Now I can turn off the light on my refrigerator by pulling the tab across the the switch. It's a convenient system and definitely works better than the masking tape I used to apply.",
      author: "Frances",
      location: "",
    },
    {
      text: "It works just as expected in the fridge, i havent used it in the freezer",
      author: "Grateful",
      location: "",
    },
    {
      text: "It is so simple to turn off lights in refrigerator on the Sabbath,Simple,but brilliant idea.",
      author: "Amazon Customer",
      location: "",
    },
    {
      text: "Easy to use and it works! Yes, it really is just Velcro but for someone like me who is not crafty this was an easy thing. Love it!",
      author: "Shay Pilnik",
      location: "",
    },
    {
      text: "It works great, saved me a lot of headaches every Friday ...",
      author: "Shlomo Frid",
      location: "",
    },
    {
      text: "Works well, so far!",
      author: "R. Mark",
      location: "",
    },
    {
      text: "Worked perfectly",
      author: "Frieda",
      location: "",
    },
    {
      text: "we thought we had bought a refrigerator with sabbath mode. When we realized it did not have sabbath mode we ordered these and they work great.",
      author: "Deborah Marks",
      location: "",
    },
    {
      text: "Easy to install and hold the light closed all shabbos. We can finally see our food again without worrying about unscrewing the light bulbs!",
      author: "Riv",
      location: "",
    },
    {
      text: "A simple little gadget; that does the job. highly recommended. Thank YOU everyone should have one of these little gadgets for their refrigerators.",
      author: "Aaron Akselrud",
      location: "",
    },
    {
      text: "It works great. I'm very satisfied. It's very easy to strap the velcro over the button every Shabbos. Makes our lives much easier.",
      author: "M. Kaplan",
      location: "",
    },
    {
      text: "Finally, a great way to turn the fridge light off for Shabbat and Yom Tov! I definitely recommend buying this product!",
      author: "S. Witztum",
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

export default FridgeezReviews;
