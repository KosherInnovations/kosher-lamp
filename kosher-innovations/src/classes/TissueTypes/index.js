import React from "react";

class TissueDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "trial",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=e1d76dfe33f242e9a17e2dd45837ed11",
        heading: "1 x 8 Pack",
      },
      {
        id: "family",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&bid=32d35e429067ce75ec7328e9512c4420",
        heading: "6 x 8 Pack",
      },
      {
        id: "club",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&bid=331a14206e748862986b896f511cbd5f",
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
