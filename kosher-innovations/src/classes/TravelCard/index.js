import * as React from "react";
import TravelModal from "../../modals/TravelModal";
import travelWhite from "../../resources/travel-lamp/white-travel.png";
import travelGrey from "../../resources/travel-lamp/grey-travel.png";
import travelBlack from "../../resources/travel-lamp/black-travel.png";
import travelBrown from "../../resources/travel-lamp/brown-travel.png";

class travelCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "white",
        href: "https://www.kosherimage.com/cmd.php?pid=0f59cbfeb19f4a47a417c0ae1c1c3d32",
        imgSrc: travelWhite,
        titleTag: "Travel Lamp White Edition",
        altTag:
          "The Travel KosherLamp, white edition. Small enough for travel while still bright enough to light up an entire room.",
      },
      {
        id: "grey",
        href: "https://www.kosherimage.com/cmd.php?pid=156ef0e192fb4009886fa0e1389288ae",
        imgSrc: travelGrey,
        titleTag: "Travel Lamp Grey Edition",
        altTag:
          "The Travel KosherLamp, grey edition. Small enough for travel while still bright enough to light up an entire room.",
      },
      {
        id: "black",
        href: "https://www.kosherimage.com/cmd.php?pid=cd4dc5f4693e42f79a70913656236248",
        imgSrc: travelBlack,
        titleTag: "Travel Lamp Black Edition",
        altTag:
          "The Travel KosherLamp, black edition. Small enough for travel while still bright enough to light up an entire room.",
      },
      {
        id: "brown",
        href: "https://www.kosherimage.com/cmd.php?pid=a4642f2f517f4c9ab9f6e356a749412c",
        imgSrc: travelBrown,
        titleTag: "Travel Lamp Brown Edition",
        altTag:
          "The Travel KosherLamp, brown edition. Small enough for travel while still bright enough to light up an entire room.",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker travel"
          id={`travel-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
      );
    });

    this.state = {
      href: "https://www.kosherimage.com/cmd.php?pid=0f59cbfeb19f4a47a417c0ae1c1c3d32", // Set the initial href for the add to cart button
      src: travelWhite,
      title: "Travel Lamp White Edition",
      alt: "The Travel KosherLamp, white edition. Small enough for travel while still bright enough to light up an entire room.",
      price: "52.95",
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
            <h1 title={this.state.title}>Travel Lamp</h1>
          </header>
          <img
            id="travel-card-img"
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
              className="travel-cart"
              href={this.state.href}
              title={`add ${this.state.title} to cart`}
            >
              Add To Cart
            </a>
            <TravelModal />
          </div>
        </div>
      </div>
    );
  }
}

export default travelCard;
