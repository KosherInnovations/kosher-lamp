import React from "react";
import LazyLoad from "react-lazyload";
import DecalBtn from "../../modals/DecalBtn";
import alephBet from "../../resources/decals/aleph-bet.webp";
import asherYatzar from "../../resources/decals/asher-yatzar.webp";
import mitzvahTrain from "../../resources/decals/mitzvah-train.webp";

class DecalCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "aleph-bet",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=b1e04916143744b383a9d6ffd3c44c7f",
        heading: "Aleph Bet",
        imgSrc: alephBet,
        titleTag: "Aleph Bet Wall Decal",
        altTag: "The Aleph Bet Wall Decal, a fun way to decorate your walls",
      },
      {
        id: "asher-yatzar",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4a7df1614bbb4266842a421036ec4762",
        heading: "Asher Yatzar",
        imgSrc: asherYatzar,
        titleTag: "Asher Yatzar Wall Decal",
        altTag: "The Asher Yatzar Wall Decal, a fun way to decorate your walls",
      },
      {
        id: "mitzvah-train",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=dee5f1ab0ba84d6c9f79a3389bf16b8a",
        heading: "Mitzvah Train",
        imgSrc: mitzvahTrain,
        titleTag: "Mitzvah Train Decal",
        altTag:
          "The Mitzvah Train Wall Decal, a fun way to decorate your walls",
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
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=b1e04916143744b383a9d6ffd3c44c7f", // Set the initial href for the add to cart button
      src: alephBet,
      alt: "The Aleph Bet Wall Decal, a fun way to decorate your walls",
      title: "The Aleph Bet Wall Decal",
      price: "12.50",
    };
  }

  handleClick(item) {
    // When a div is clicked, update the href for the add to cart button
    this.setState({
      href: item.href,
      src: item.imgSrc,
      alt: item.altTag,
      title: item.titleTag,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="imgBox">
          <header>
            <h1 title={this.state.title}>Jewish Wall Decals</h1>
          </header>
          <LazyLoad height={200} offset={100}>
            <img
              rel="prefetch"
              src={this.state.src}
              alt={this.state.alt}
              title={this.state.title}
            ></img>
          </LazyLoad>
        </div>

        <h2 className="product-price">${this.state.price}</h2>
        <div className="content">
          <h3>Click On A Type</h3>
          <div className="type">{this.divs}</div>
          <div className="flex-box">
            <a
              rel="noreferrer"
              target="_blank"
              className="decal-cart"
              href={this.state.href}
              title={`add ${this.state.title} to cart`}
            >
              Add To Cart
            </a>
            <DecalBtn pages={this.props.pages} setCurrentPage={this.props.setCurrentPage} />
          </div>
        </div>
      </div>
    );
  }
}

export default DecalCard;
