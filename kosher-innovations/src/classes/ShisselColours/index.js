import React from "react";

class KmaxDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea",
      },
      {
        id: "grey",
        href: "https://www.kosherimage.com/cmd.php?pid=d25a71ec1a704649ba40277dc6cb11a2",
      },
      {
        id: "beige",
        href: "https://www.kosherimage.com/cmd.php?pid=88e6be0e4e2b4b248b2745ce1fbf2e4e",
      },
      {
        id: "pink",
        href: "https://www.kosherimage.com/cmd.php?pid=4f01e79e0dd448b382ea6f4ee330de82",
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
        >
        </div>
      );
    });

    this.state = {
      href: "/blue", // Set the initial href for the add to cart button
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
        <a className="kmax-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default KmaxDivs;
