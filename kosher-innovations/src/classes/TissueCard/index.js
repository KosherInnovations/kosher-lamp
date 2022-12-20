import * as React from "react";
import TissueModal from "../../modals/TissueModal";
import tissueImg from "../../resources/tissue/tissue.png";

class TissueCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "trial",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=e1d76dfe33f242e9a17e2dd45837ed11",
        heading: "1 x 8 Pack",
        titleTag: "Shabbos Tissue Trial Pack | 1 x 8",
        altTag:
          "The Shabbos Tissue, trial pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
      },
      {
        id: "family",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&bid=32d35e429067ce75ec7328e9512c4420",
        heading: "6 x 8 Pack",
        titleTag: "Shabbos Tissue Family Pack | 6 x 8",
        altTag:
          "The Shabbos Tissue, family pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
      },
      {
        id: "club",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&bid=331a14206e748862986b896f511cbd5f",
        heading: "12 x 8 Pack",
        titleTag: "Shabbos Tissue Club Pack | 12 x 8",
        altTag:
          "The Shabbos Tissue, club pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
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
      href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=e1d76dfe33f242e9a17e2dd45837ed11", // Set the initial href for the add to cart button
      title: "Shabbos Tissue Trial Pack | 1 x 8",
      alt: "The Shabbos Tissue, trial pack, the bathroom tissue made for use on Shabbos and Yom Tov, and is in accordance with Halacha",
    };
  }

  handleClick(item) {
    // When a div is clicked, update the href for the add to cart button
    this.setState({
      href: item.href,
      alt: item.altTag,
      title: item.titleTag,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="imgBox">
          <header>
            <h1 title={this.state.title}>Shabbos Bathroom Tissue</h1>
          </header>
          <img
            src={tissueImg}
            alt={this.state.alt}
            title={this.state.title}
          ></img>
        </div>
        <div className="content">
          <h3>Click On A Type</h3>
          <div className="type">{this.divs}</div>
          <div className="flex-box">
            <a
              className="tissue-cart"
              href={this.state.href}
              title={`add ${this.state.title} to cart`}
            >
              Add To Cart
            </a>
            <TissueModal />
          </div>
        </div>
      </div>
    );
  }
}

export default TissueCard;
