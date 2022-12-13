import React from "react";
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
        altTag: "Travel Lamp White Image",
      },
      {
        id: "grey",
        href: "https://www.kosherimage.com/cmd.php?pid=156ef0e192fb4009886fa0e1389288ae",
        imgSrc: travelGrey,
        altTag: "Travel Lamp Grey Image",
      },
      {
        id: "black",
        href: "https://www.kosherimage.com/cmd.php?pid=cd4dc5f4693e42f79a70913656236248",
        imgSrc: travelBlack,
        altTag: "Travel Lamp Black Image",
      },
      {
        id: "brown",
        href: "https://www.kosherimage.com/cmd.php?pid=a4642f2f517f4c9ab9f6e356a749412c",
        imgSrc: travelBrown,
        altTag: "Travel Lamp Brown Image",
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
      alt: "Travel Lamp White Image",
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
            <h1>Travel Lamp</h1>
          </div>
          <div className="content">
            <h3>Click On A Color</h3>
            <div className="color">{this.divs}</div>
            <a className="travel-cart" href={this.state.href}>
              Add To Cart
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default travelCard;
