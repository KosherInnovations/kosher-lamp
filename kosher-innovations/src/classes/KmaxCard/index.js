import * as React from "react";
import KmaxModal from "../../modals/KmaxModal";
import kLampWhite from "../../resources/kmax/white-kmax.png";
import kLampSteel from "../../resources/kmax/silver-kmax.png";
import kLampBlack from "../../resources/kmax/black-kmax.png";
import kLampBlue from "../../resources/kmax/blue-kmax.png";
import kLampGreen from "../../resources/kmax/green-kmax.png";
import kLampMarble from "../../resources/kmax/marble-kmax.png";
import kLampCherry from "../../resources/kmax/cherry-kmax.png";
import kLampIvory from "../../resources/kmax/ivory-kmax.png";
import kLampPink from "../../resources/kmax/pink-kmax.png";


// a hover to zoom feature

// const wrapper = document.querySelector(".zoom-wrapper");
// const preview = document.querySelector(".zoom-preview");
// const target = document.querySelector(".zoom-target");

// const addZoomFeature = () => {
//   wrapper.addEventListener("mousemove", (event) => {
//     // Calculate the position of the preview box
//     const x = event.offsetX;
//     const y = event.offsetY;
//     const previewX = x - preview.offsetWidth / 2;
//     const previewY = y - preview.offsetHeight / 2;

//     // Update the background position of the preview box
//     const backgroundX = -x * 2;
//     const backgroundY = -y * 2;
//     preview.style.backgroundPosition = `${backgroundX}px ${backgroundY}px`;

//     // Update the position of the preview box
//     preview.style.left = `${previewX}px`;
//     preview.style.top = `${previewY}px`;
//   });

//   wrapper.addEventListener("mouseover", () => {
//     // Set the background image of the preview box
//     preview.style.backgroundImage = `url(${target.src})`;

//     // Show the preview box
//     preview.style.display = "block";
//   });

//   wrapper.addEventListener("mouseout", () => {
//     // Hide the preview box
//     preview.style.display = "none";
//   });
// };

// window.onload = addZoomFeature;

class KmaxCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "white",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1e99aeaef8244888a83b5451719f37ba",
        imgSrc: kLampWhite,
        titleTag: "KosherLamp MAX White",
        altTag:
          "The KosherLamp MAX, white edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "steel",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=786c59a779a84c3fb49490d3a3e5851d",
        imgSrc: kLampSteel,
        titleTag: "KosherLamp MAX Steel",
        altTag:
          "The KosherLamp MAX, steel edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "black",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=bc64082aae4b4c1e8bf84860ad7e28e8",
        imgSrc: kLampBlack,
        titleTag: "KosherLamp MAX Black",
        altTag:
          "The KosherLamp MAX, black edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "blue",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c7b777faf88748a6aa1785fc3cadda6b",
        imgSrc: kLampBlue,
        titleTag: "KosherLamp MAX Blue",
        altTag:
          "The KosherLamp MAX, blue edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "green",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=39a0d1a0846f4823a8454d2e693e198e",
        imgSrc: kLampGreen,
        titleTag: "KosherLamp MAX Green",
        altTag:
          "The KosherLamp MAX, green edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "marble",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1d455431b3314416b3b3ab4a10f60890",
        imgSrc: kLampMarble,
        titleTag: "KosherLamp MAX Marble",
        altTag:
          "The KosherLamp MAX, marble edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "cherry",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=8f4691d63dda490c8a3761a093b8d40d",
        imgSrc: kLampCherry,
        titleTag: "KosherLamp MAX Cherry",
        altTag:
          "The KosherLamp MAX, cherry edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "ivory",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1fb9df66839e418aa7c54a79ae152c74",
        imgSrc: kLampIvory,
        titleTag: "KosherLamp MAX Ivory",
        altTag:
          "The KosherLamp MAX, ivory edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "pink",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c6b34023ea794b8ca65b5c63070d230b",
        imgSrc: kLampPink,
        titleTag: "KosherLamp MAX Pink",
        altTag:
          "The KosherLamp MAX, pink edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
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
      alt: "The KosherLamp MAX, white edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      title: "KosherLamp MAX White",
      price: "52.95",
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
            <h1 title={this.state.title}>KosherLamp MAX</h1>
          </header>
          <div className="zoom-wrapper">
            <img
              className="zoom-target"
              src={this.state.src}
              alt={this.state.alt}
              title={this.state.title}
            ></img>
            <div className="zoom-preview"></div>
          </div>
        </div>
        <h2 className="product-price">${this.state.price}</h2>
        <div className="content">
          <h3>Click On A Color</h3>
          <div className="color">{this.divs}</div>
          <div className="flex-box">
            <a
              className="kmax-cart"
              href={this.state.href}
              title={`add ${this.state.title} to cart`}
            >
              Add To Cart
            </a>
            <KmaxModal />
          </div>
        </div>
      </div>
    );
  }
}

export default KmaxCard;
