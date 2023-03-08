import React from "react";

const TravelReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "Thought you'd get a kick out of this: We no longer call our light the Kosher Lamp - we call it the Ner Tamid because it's so convenient to use during the week when only one of us wants to stay up reading that we keep it on all week long!",
      author: "Ayelet M.",
      location: "",
    },
    {
      text: "You should know that the Kosher Lamp is my gift of choice to Kallas and new moms! They are so appreciative. It brings real oneg to our Shabbat! shanna tova umtuka.",
      author: "Yehudit S",
      location: "",
    },
    {
      text: "I really like those KosherLamps! We have one and will hopefully get another sometime. I have used it in the kids' room to allow bedtime stories and whaterver else we need, and for reading in my room, when we have guests, etc...They are very low watt energy saver bulbs, and so convenient!",
      author: "A.M.",
      location: "",
    },
    {
      text: "[the KosherLamp] doesn't overheat. It doesn't add a significant amount to your electric bill if you keep it on. Once you use a KosherLamp, it's hard to ever go back.",
      author: "imamother participant",
      location: "",
    },
    {
      text: "Having a KosherLamp is definitely a lot more convenient than having a lamp in the bedroom with a timer. I thought it was a silly invention until I got a KosherLamp for a wedding gift. Now we have two in the bedroom and I'm lost when we forget to turn it on before Shabbos.",
      author: "D.",
      location: "",
    },
    {
      text: "I think the Kosher Lamp is the world's greatest invention!",
      author: "J.G.",
      location: "",
    },
    {
      text: "I L-O-V-E my kosher lamp!!",
      author: "Jennifer W.",
      location: "",
    },
    {
      text: "Dear Kosher Lamp, We love your lamp because it gives us light on Shabbos. Thank you for making it. We used to have it in our old house in Yerushalayim and we loved it so much! Our grandparents have it also in every guest room.",
      author: "Zehava and Tova G.",
      location: "",
    },
    {
      text: "Night lights have always been a problem - very scary for my three year old. We found the solution with the Teddy Lamp. It doesn't make scary shadows. My child loves it!",
      author: "Mindy C.",
      location: "",
    },
    {
      text: "You've really made Shalom Bayis. My boys always fought when going to sleep. One likes it dark to sleep and the other likes to read. The KosherLamp solved the problem. Who would have thought something I bought for Shabbos would be so useful during the week too. Thank you for a wonderful invention.",
      author: "Faigie M.",
      location: "",
    },
    {
      text: "I don't know where you get such innovative and practical ideas, but keep up the great product development.  Your products enhance our enjoyment of Shabbos and Yom Tov!  Your lamps, clock, and other items address real needs in a simple, yet halachically appropriate way.  Thank you so much!",
      author: "Malka L. Caplan",
      location: "Baltimore",
    },
    {
      text: "Rabbi Veffer with his Kosherlamp is providing a great service by making Shabbos observance easier for the Jewish People.",
      author: "Rabbi Ari Kahn",
      location: "Givat Zeev, Israel",
    },
    {
      text: "That’s neat. My wife will love it.",
      author: "Rabbi Yitzchok Lowenbrau",
      location: "Baltimore",
    },
    {
      text: "Shabbos never looked brighter!",
      author: "Rabbi Shraga Simmons",
      location: "Jerusalem",
    },
    {
      text: "It’s no different than closing the closet door, it’s just better!",
      author: "Rabbi Yitzchak Kalsmith",
      location: "New York",
    },
    {
      text: "Now I can read in bed Friday night.",
      author: "Rabbi Mitch Mandel",
      location: "Thornhill",
    },
    {
      text: "I think it’s great. Simple, elegant and revolutionary for the Shomer Shabbos family.",
      author: "Rabbi Yitzchak Coopersmith",
      location: "Jerusalem",
    },
    {
      text: "It’s brilliant!",
      author: "Rabbi Naftali Schiff",
      location: "London",
    },
    {
      text: "The Almighty gives us Shabbos for “Oneg” (pleasure). The Rambam says this is light. Beautiful!",
      author: "Rabbi Yonah Yaffe",
      location: "Jerusalem",
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

export default TravelReviews;
