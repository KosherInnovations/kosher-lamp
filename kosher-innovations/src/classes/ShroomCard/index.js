import React from "react";
import shroomRed from "../../resources/shroom-lamp/red-shroom.png";
import shroomBlue from "../../resources/shroom-lamp/blue-shroom.png";
import shroomPink from "../../resources/shroom-lamp/pink-shroom.png";

class ShroomCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "red",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=515cfa6e0de346488d2891efe33e0200",
        imgSrc: shroomRed,
        altTag: "Red Mushroom KosherLamp",
      },
      {
        id: "blue",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=a536c0e0c04845d79935221cc8e5788a",
        imgSrc: shroomBlue,
        altTag: "Blue Mushroom KosherLamp",
      },
      {
        id: "pink",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=6a5f763c161f4fd3bb567442f5628fed",
        imgSrc: shroomPink,
        altTag: "Pink Mushroom KosherLamp",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker shroom"
          id={`shroom-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
      );
    });

    this.state = {
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=515cfa6e0de346488d2891efe33e0200", // Set the initial href for the add to cart button
      src: shroomRed,
      alt: "Red Mushroom KosherLamp",
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
            <h1>Mushroom KosherLamp</h1>
          </div>
          <div className="content">
            <h3>Click On A Color</h3>
            <div className="color">{this.divs}</div>
            <a className="shroom-cart" href={this.state.href}>
              Add To Cart
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ShroomCard;
