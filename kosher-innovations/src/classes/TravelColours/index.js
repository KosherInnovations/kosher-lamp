import React from "react";

class travelDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "white",
        href: "https://www.kosherimage.com/cmd.php?pid=0f59cbfeb19f4a47a417c0ae1c1c3d32",
      },
      {
        id: "grey",
        href: "https://www.kosherimage.com/cmd.php?pid=156ef0e192fb4009886fa0e1389288ae",
      },
      {
        id: "black",
        href: "https://www.kosherimage.com/cmd.php?pid=cd4dc5f4693e42f79a70913656236248",
      },
      {
        id: "brown",
        href: "https://www.kosherimage.com/cmd.php?pid=a4642f2f517f4c9ab9f6e356a749412c",
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
