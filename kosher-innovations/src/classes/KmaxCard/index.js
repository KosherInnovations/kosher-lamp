import React from "react";
import kLampWhite from "../../resources/kmax/white-kmax.png";
import kLampSteel from "../../resources/kmax/silver-kmax.png";

class KmaxCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "white",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1e99aeaef8244888a83b5451719f37ba",
        imgSrc: kLampWhite,
        altTag: "KosherLamp MAX White",
      },
      {
        id: "steel",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=786c59a779a84c3fb49490d3a3e5851d",
        imgSrc: kLampSteel,
        altTag: "KosherLamp MAX Steel",
      },
      // {
      //   id: "black",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=bc64082aae4b4c1e8bf84860ad7e28e8",
      // },
      // {
      //   id: "blue",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c7b777faf88748a6aa1785fc3cadda6b",
      // },
      // {
      //   id: "green",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=39a0d1a0846f4823a8454d2e693e198e",
      // },
      // {
      //   id: "marble",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1d455431b3314416b3b3ab4a10f60890",
      // },
      // {
      //   id: "cherry",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=8f4691d63dda490c8a3761a093b8d40d",
      // },
      // {
      //   id: "ivory",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1fb9df66839e418aa7c54a79ae152c74",
      // },
      // {
      //   id: "pink",
      //   href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c6b34023ea794b8ca65b5c63070d230b",
      // },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker kmax"
          id={`kmax-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
      );
    });

    this.state = {
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1e99aeaef8244888a83b5451719f37ba", // Set the initial href for the add to cart button
      src: kLampWhite,
      alt: "KosherLamp MAX White",
    };
  }

  handleClick(item) {
    // When a div is clicked, update the href for the add to cart button
    this.setState({
      href: item.href,
      src: item.imgSrc,
      alt: item.altTag,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="imgBox">
          <img src={this.state.src} alt={this.state.alt} />
          <h1>KosherLamp MAX</h1>
        </div>
        <div className="content">
          {/* < KmaxModal /> */}
          <h3>Click On A Color</h3>
          <div className="color">{this.divs}</div>
          <a className="kmax-cart" href={this.state.href}>
            Add To Cart
          </a>
        </div>
      </div>
    );
  }
}

export default KmaxCard;
