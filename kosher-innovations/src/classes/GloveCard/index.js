import * as React from "react";
import GlovesModal from "../../modals/GlovesModal";
import glovesRed from "../../resources/scrub-gloves/gloves-red.png";
import glovesBlue from "../../resources/scrub-gloves/gloves-blue.png";

class GloveCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "red",
        href: "https://www.kosherimage.com/cmd.php?pid=a0a5dfe511e4436f85d2fca1921a117c",
        imgSrc: glovesRed,
        altTag:
          "The Shabbos Scrub Gloves, red edition, an awesome way to wash dishes on Shabbos and Yom Tov in accordance with Halacha",
        titleTag: "Red Shabbos Scrub Gloves",
      },
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=2dff3e69a98643e083565edbbb3713d6",
        imgSrc: glovesBlue,
        altTag:
          "The Shabbos Scrub Gloves, blue edition, an awesome way to wash dishes on Shabbos and Yom Tov in accordance with Halacha",
        titleTag: "Blue Shabbos Scrub Gloves",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker gloves"
          id={`gloves-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
      );
    });

    this.state = {
      href: "https://www.kosherimage.com/cmd.php?pid=a0a5dfe511e4436f85d2fca1921a117c", // Set the initial href for the add to cart button
      src: glovesRed,
      alt: "The Shabbos Scrub Gloves, red edition, an awesome way to wash dishes on Shabbos and Yom Tov in accordance with Halacha",
      title: "Red Shabbos Scrub Gloves",
      price: "7.99",
    };
  }

  handleClick(item) {
    // When a div is clicked, update the href for the add to cart button
    this.setState({
      href: item.href,
      src: item.imgSrc,
      alt: item.altTag,
      title: item.titleTag,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="imgBox">
          <header>
            <h1 title={this.state.title}>Shabbos Scrub Gloves</h1>
          </header>
          <img
            src={this.state.src}
            alt={this.state.alt}
            title={this.state.title}
          ></img>
        </div>

        <h2 className="product-price">${this.state.price}</h2>
        <div className="content">
          <h3>Click On A Color</h3>
          <div className="color">{this.divs}</div>
          <div className="flex-box">
            <a
              className="gloves-cart"
              href={this.state.href}
              title={`add ${this.state.title} to cart`}
            >
              Add To Cart
            </a>
            <GlovesModal />
          </div>
        </div>
      </div>
    );
  }
}

export default GloveCard;
