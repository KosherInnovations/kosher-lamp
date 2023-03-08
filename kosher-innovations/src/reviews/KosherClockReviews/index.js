import React from "react";

const KosherClockReviews = () => {
  // list of testimonials
  const testimonials = [
    {
      text: "I am very impressed with KosherClock3, I do not have to set alarms anymore as I have 4 weekday, 4 Shabbos, and 2 Sunday alarms set. This is a superior alarm clock. Keep up the good work!",
      author: "Daniel K.",
      location: "",
    },
    {
      text: "I like the fact that it has the weekday alarm. The Shabbos snooze feature is great.",
      author: "Leah L.",
      location: "",
    },
    {
      text: "When I set my alarm on shabbat, I dont have to hear it for the rest of the day.",
      author: "Baily S.",
      location: "",
    },
    {
      text: "Sounds like an essential for every Jewish home!",
      author: "Ettil H.",
      location: "",
    },
    {
      text: "I'm in a yeshiva that the Madrichm do not wake anyone up for davening on Shabbat. Without an alarm it is really hard to get up for davening. I had the older version of the shabbos clock, but it is died due to over use. I really need a new one, this past Shabbat I almost missed Shacharit, and I don't want to again!",
      author: "Ilan R.",
      location: "",
    },
    {
      text: "Being able to set different alarms for different days is GREAT! So is the ability to cover up the 'snooze' button for Shabbos & Yom Tov, for those of us who like to swat our clocks in our sleep! I will surely be getting at least one of these KosherClock3 clocks.",
      author: "Steven C.",
      location: "",
    },
    {
      text: "After each alarm going off at a different time, with no ability to turn it off, my roommates were annoyed at the blasting 'beep-beep-beep' that could be heard through-out the dorm. This is why I want a KosherClock3. For both the convenience of the separate alarms each day, and for its' new quieter setting!",
      author: "Jonah K.",
      location: "",
    },
    {
      text: "I own both of the previous Shabbos alarms. This new one looks like a BIG improvement! 10 different alarms?? Gevaldik!",
      author: "Avi S.",
      location: "",
    },
    {
      text: "I would LOVE a Kosher Clock to wake me up for Shul on Shabbos and from my nap and.... the list just goes on and on....",
      author: "Eli K.",
      location: "",
    },

    {
      text: "I've been looking for an alarm clock that can be used on Shabbos - this is a wonderful item that's easy to transport (we often go away for Shabbos) & one that will be put to good use, whether for waking up in time for Shacharis, especially if we have to daven somewhere else that's further than normal, or for waking up after our Shabbos naps.",
      author: "Chumi B.",
      location: "",
    },
    {
      text: "I love going to Hashkamah in my shul's Beth Hamidrash which means I need to get up by 6:30. I can't think of a nicer way of being woken up for this mitzvah (as listed in Elu Dvarim) than by hearing the sound of a shabbos clock! Sitting next to my kosher lamp, it would make the perfect shabbosdik accompaniment.",
      author: "Kalman V.",
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

export default KosherClockReviews;
