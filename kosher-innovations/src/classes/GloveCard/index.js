import React from "react";
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
        altTag: "Red Scrub Gloves",
      },
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=2dff3e69a98643e083565edbbb3713d6",
        imgSrc: glovesBlue,
        altTag: "Blue Scrub Gloves",
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
      alt: "Red Scrub Gloves",
    };
  }

  handleClick(item) {
    // When a div is clicked, update the href for the add to cart button
    this.setState({
      href: item.href,
      src: item.imgSrc,
      alt: item.altTag,
    });
  }

  render() {
    return (
      <>
        <div className="card">
          <div className="imgBox">
            <img src={this.state.src} alt={this.state.alt}></img>
            <h1>Shabbos Scrub Gloves</h1>
          </div>
          <div className="content">
            <h3>Click On A Color</h3>
            <div className="color">{this.divs}</div>
            <a className="gloves-cart" href={this.state.href}>
              Add To Cart
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default GloveCard;
