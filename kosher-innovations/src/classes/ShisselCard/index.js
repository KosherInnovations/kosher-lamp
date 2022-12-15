import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import shisselBlue from "../../resources/smart-shissel/blue-shissel.png";
// import shisselGrey from "../../resources/smart-shissel/grey-shissel.png";
import shisselBeige from "../../resources/smart-shissel/beige-shissel.png";
import shisselPink from "../../resources/smart-shissel/pink-shissel.png";

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

class ShisselCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "blue",
        href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea",
        imgSrc: shisselBlue,
        altTag: "Blue Smart Shissel",
      },
      // {
      //   id: "grey",
      //   href: "https://www.kosherimage.com/cmd.php?pid=d25a71ec1a704649ba40277dc6cb11a2",
      //   imgSrc: shisselGrey,
      //   altTag: "Grey Smart Shissel",
      // },
      {
        id: "beige",
        href: "https://www.kosherimage.com/cmd.php?pid=88e6be0e4e2b4b248b2745ce1fbf2e4e",
        imgSrc: shisselBeige,
        altTag: "Beige Smart Shissel",
      },
      {
        id: "pink",
        href: "https://www.kosherimage.com/cmd.php?pid=4f01e79e0dd448b382ea6f4ee330de82",
        imgSrc: shisselPink,
        altTag: "Pink Smart Shissel",
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
        ></div>
      );
    });

    this.state = {
      href: "https://www.kosherimage.com/cmd.php?pid=1e2781d9e9db40d995552a7c7939c2ea", // Set the initial href for the add to cart button
      src: shisselBlue,
      alt: "Blue Smart Shissel",
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
      <>
        <div className="card">
          <div className="imgBox">
            <img src={this.state.src} alt={this.state.alt}></img>
            <h1>Smart Shissel</h1>
          </div>
          <div className="content">
            <h3>Click On A Color</h3>
            <div className="color">{this.divs}</div>
            <div className="flex-box">
            <a className="kmax-cart" href={this.state.href}>
              Add To Cart
            </a>< BasicModal /></div>
          </div>
        </div>
      </>
    );
  }
}

export default ShisselCard;
