import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";

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
        <div className="flex-box">
          <a className="tissue-cart" href={this.state.href}>
            Add To Cart
          </a>
          <BasicModal />
        </div>
      </>
    );
  }
}

export default TissueDivs;
