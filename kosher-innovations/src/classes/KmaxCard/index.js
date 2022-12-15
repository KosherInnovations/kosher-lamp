import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import kLampWhite from "../../resources/kmax/white-kmax.png";
import kLampSteel from "../../resources/kmax/silver-kmax.png";
import kLampBlack from "../../resources/kmax/black-kmax.png";
import kLampBlue from "../../resources/kmax/blue-kmax.png";
import kLampGreen from "../../resources/kmax/green-kmax.png";
import kLampMarble from "../../resources/kmax/marble-kmax.png";
import kLampCherry from "../../resources/kmax/cherry-kmax.png";
import kLampIvory from "../../resources/kmax/ivory-kmax.png";
import kLampPink from "../../resources/kmax/pink-kmax.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="button to open info about KosherLamp MAX"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            KosherLamp MAX Info (USA only)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            KosherLamp MAX means the most light with a bigger window. A simple
            twist reveals or hides the light on this innovative reading lamp.
            It's a practical and innovative idea that's perfect in any room Now
            you'll have even more light to read on Shabbos!<br></br>
            <br></br>LED bulbs, energy efficient, new design, easy twist
            technology, beautiful colours, easy to use thumb-switch, and can be
            used on Shabbos according to halacha. It's convenient and easy.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

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
        altTag: "The KosherLamp MAX, white edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "steel",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=786c59a779a84c3fb49490d3a3e5851d",
        imgSrc: kLampSteel,
        titleTag: "KosherLamp MAX Steel",
        altTag: "The KosherLamp MAX, steel edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "black",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=bc64082aae4b4c1e8bf84860ad7e28e8",
        imgSrc: kLampBlack,
        titleTag: "KosherLamp MAX Black",
        altTag: "The KosherLamp MAX, black edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "blue",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c7b777faf88748a6aa1785fc3cadda6b",
        imgSrc: kLampBlue,
        titleTag: "KosherLamp MAX Blue",
        altTag: "The KosherLamp MAX, blue edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "green",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=39a0d1a0846f4823a8454d2e693e198e",
        imgSrc: kLampGreen,
        titleTag: "KosherLamp MAX Green",
        altTag: "The KosherLamp MAX, green edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "marble",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1d455431b3314416b3b3ab4a10f60890",
        imgSrc: kLampMarble,
        titleTag: "KosherLamp MAX Marble",
        altTag: "The KosherLamp MAX, marble edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "cherry",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=8f4691d63dda490c8a3761a093b8d40d",
        imgSrc: kLampCherry,
        titleTag: "KosherLamp MAX Cherry",
        altTag: "The KosherLamp MAX, cherry edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "ivory",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1fb9df66839e418aa7c54a79ae152c74",
        imgSrc: kLampIvory,
        titleTag: "KosherLamp MAX Ivory",
        altTag: "The KosherLamp MAX, ivory edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
      },
      {
        id: "pink",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=c6b34023ea794b8ca65b5c63070d230b",
        imgSrc: kLampPink,
        titleTag: "KosherLamp MAX Pink",
        altTag: "The KosherLamp MAX, pink edition, an aestheically pleasing lamp which is handy for shutting out the lights on Shabbos and Yom Tov",
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
          <img src={this.state.src} alt={this.state.alt} title={this.state.title} />
          <h1 title={this.state.title}>KosherLamp MAX</h1>
        </div>
        <div className="content">
          <h3>Click On A Color</h3>
          <div className="color">{this.divs}</div>
          <div className="flex-box">
            <a className="kmax-cart" href={this.state.href} title={`add ${this.state.title} to cart`}>
              Add To Cart
            </a>
            <BasicModal />
          </div>
        </div>
      </div>
    );
  }
}

export default KmaxCard;
