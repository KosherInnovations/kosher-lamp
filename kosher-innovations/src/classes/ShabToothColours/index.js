import React from "react";

class KmaxDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "red",
        href: "/red",
      },
      {
        id: "blue",
        href: "/blue",
      },
      {
        id: "yellow",
        href: "/yellow",
      },
      {
        id: "purple",
        href: "/purple",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker shabtooth"
          id={`shabtooth-${item.id}`}
          onClick={() => this.handleClick(item)}
        >
        </div>
      );
    });

    this.state = {
      href: "/red", // Set the initial href for the add to cart button
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
        <a className="shabtooth-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default KmaxDivs;
