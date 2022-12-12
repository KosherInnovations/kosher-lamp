import React from "react";

class TissueDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "trial",
        href: "/trial",
        heading: "1 x 8 Pack",
      },
      {
        id: "family",
        href: "/family",
        heading: "6 x 8 Pack",
      },
      {
        id: "club",
        href: "/club",
        heading: "12 x 8 Pack",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="type-picker tissue"
          id={`${item.id}-pack`}
          onClick={() => this.handleClick(item)}
        >
            <p>{item.heading}</p>
        </div>
      );
    });

    this.state = {
      href: "/trial", // Set the initial href for the add to cart button
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
        <div className="type">{this.divs}</div>
        <a className="tissue-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default TissueDivs;
