import React from "react";

class GloveDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "red",
        href: "https://www.kosherimage.com/cmd.php?pid=a0a5dfe511e4436f85d2fca1921a117c",
      },
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=2dff3e69a98643e083565edbbb3713d6",
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
        <a className="gloves-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default GloveDivs;
