import * as React from "react";
import LazyLoad from "react-lazyload";
import ShisselModal from "../../modals/ShisselModal";
import shisselBlue from "../../resources/smart-shissel/blue-shissel.webp";
import shisselGrey from "../../resources/smart-shissel/grey-shissel.webp";
import shisselBeige from "../../resources/smart-shissel/beige-shissel.webp";
import shisselPink from "../../resources/smart-shissel/pink-shissel.webp";

class ShisselCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea",
        imgSrc: shisselBlue,
        titleTag: "Blue Smart Shissel",
        altTag:
          "The Smart Shissel, blue edition. The smart way to wash Negel Vasser in the morning",
      },
      {
        id: "grey",
        href: "https://www.kosherimage.com/cmd.php?pid=d25a71ec1a704649ba40277dc6cb11a2",
        imgSrc: shisselGrey,
        titleTag: "Grey Smart Shissel",
        altTag:
          "The Smart Shissel, grey edition. The smart way to wash Negel Vasser in the morning",
      },
      {
        id: "beige",
        href: "https://www.kosherimage.com/cmd.php?pid=88e6be0e4e2b4b248b2745ce1fbf2e4e",
        imgSrc: shisselBeige,
        titleTag: "Beige Smart Shissel",
        altTag:
          "The Smart Shissel, beige edition. The smart way to wash Negel Vasser in the morning",
      },
      {
        id: "pink",
        href: "https://www.kosherimage.com/cmd.php?pid=4f01e79e0dd448b382ea6f4ee330de82",
        imgSrc: shisselPink,
        titleTag: "Pink Smart Shissel",
        altTag:
          "The Smart Shissel, pink edition. The smart way to wash Negel Vasser in the morning",
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
      title: "Blue Smart Shissel",
      alt: "The Smart Shissel, blue edition. The smart way to wash Negel Vasser in the morning",
      price: "19.95",
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
            <h1 title={this.state.title}>Smart Shissel</h1>
          </header>
          <LazyLoad height={200} offset={100}>
            <img
              src={this.state.src}
              alt={this.state.alt}
              title={this.state.title}
            ></img>
          </LazyLoad>
        </div>

        <h2 className="product-price">${this.state.price}</h2>
        <div className="content">
          <h3>Click On A Color</h3>
          <div className="color">{this.divs}</div>
          <div className="flex-box">
            <a
              className="kmax-cart"
              href={this.state.href}
              title={`add ${this.state.title} to cart`}
            >
              Add To Cart
            </a>
            <ShisselModal />
          </div>
        </div>
      </div>
    );
  }
}

export default ShisselCard;
