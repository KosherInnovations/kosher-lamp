
const HideHeader = () => {
    // logic to make the .shipping-header disappear when the cards are hovered over
    const cards = document.querySelectorAll(".card");
    const shippingHeader = document.querySelector(".shipping-header");

    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        shippingHeader.style.opacity = "0";
      });
      card.addEventListener("mouseout", () => {
        shippingHeader.style.opacity = "1";
      });
    });

    // return () => {
    //   cards.forEach((card) => {
    //     card.removeEventListener("mouseover", () => {
    //       shippingHeader.style.opacity = "0";
    //     });
    //     card.removeEventListener("mouseout", () => {
    //       shippingHeader.style.opacity = "1";
    //     });
    //   });
    // };
};

export default HideHeader;