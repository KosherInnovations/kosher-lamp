import React from "react";

class KmaxDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "blue",
        href: "/blue",
      },
      {
        id: "green",
        href: "/green",
      },
      {
        id: "yellow",
        href: "/yellow",
      },
      {
        id: "red",
        href: "/red",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker weektooth"
          id={`weektooth-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
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
        <a className="weektooth-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default KmaxDivs;
