import React from "react";

class travelDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "white",
        href: "/white",
      },
      {
        id: "grey",
        href: "/grey",
      },
      {
        id: "black",
        href: "/black",
      },
      {
        id: "brown",
        href: "/brown",
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
        >
        </div>
      );
    });

    this.state = {
      href: "/white", // Set the initial href for the add to cart button
    };
  }

  handleClick(item) {
    // When a div is clicked, update the href for the add to cart button
    this.setState({
      href: item.href,
    });
  }

  render() {
    return (
      <>
        <div className="color">{this.divs}</div>
        <a className="travel-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default travelDivs;
