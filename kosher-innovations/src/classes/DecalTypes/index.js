import React from "react";

class DecalDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "aleph-bet",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=b1e04916143744b383a9d6ffd3c44c7f",
        heading: "Aleph Bet",
      },
      {
        id: "asher-yatzar",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4a7df1614bbb4266842a421036ec4762",
        heading: "Asher Yatzar",
      },
      {
        id: "mitzvah-train",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=dee5f1ab0ba84d6c9f79a3389bf16b8a",
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
