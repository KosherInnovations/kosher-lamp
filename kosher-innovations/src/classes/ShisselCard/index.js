import React from "react";
import shisselBlue from "../../resources/smart-shissel/blue-shissel.png";
// import shisselGrey from "../../resources/smart-shissel/grey-shissel.png";
import shisselBeige from "../../resources/smart-shissel/beige-shissel.png";
import shisselPink from "../../resources/smart-shissel/pink-shissel.png";

class ShisselCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea",
        imgSrc: shisselBlue,
        altTag: "Blue Smart Shissel",
      },
      // {
      //   id: "grey",
      //   href: "https://www.kosherimage.com/cmd.php?pid=d25a71ec1a704649ba40277dc6cb11a2",
      //   imgSrc: shisselGrey,
      //   altTag: "Grey Smart Shissel",
      // },
      {
        id: "beige",
        href: "https://www.kosherimage.com/cmd.php?pid=88e6be0e4e2b4b248b2745ce1fbf2e4e",
        imgSrc: shisselBeige,
        altTag: "Beige Smart Shissel",
      },
      {
        id: "pink",
        href: "https://www.kosherimage.com/cmd.php?pid=4f01e79e0dd448b382ea6f4ee330de82",
        imgSrc: shisselPink,
        altTag: "Pink Smart Shissel",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker shissel"
          id={`shissel-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
      );
    });

    this.state = {
      href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea", // Set the initial href for the add to cart button
      src: shisselBlue,
      alt: "Blue Smart Shissel",
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
            <h1>Smart Shissel</h1>
          </div>
          <div className="content">
            <h3>Click On A Color</h3>
            <div className="color">{this.divs}</div>
            <a className="kmax-cart" href={this.state.href}>
              Add To Cart
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ShisselCard;
