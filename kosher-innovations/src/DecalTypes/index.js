import React from "react";

class DecalDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "aleph-bet",
        href: "/aleph-bet",
        heading: "Aleph Bet",
      },
      {
        id: "asher-yatzar",
        href: "/asher-yatzar",
        heading: "Asher Yatzar",
      },
      {
        id: "mitzvah-train",
        href: "/mitzvah-train",
        heading: "Mitzvah Train",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="type-picker tissue"
          id={`${item.id}`}
          onClick={() => this.handleClick(item)}
        >
            <p>{item.heading}</p>
        </div>
      );
    });

    this.state = {
      href: "/asher-yatzar", // Set the initial href for the add to cart button
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
        <a className="decal-cart" href={this.state.href}>
          Add To Cart
        </a>
      </>
    );
  }
}

export default DecalDivs;
