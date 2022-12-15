import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import alephBet from "../../resources/decals/aleph-bet.png";
import asherYatzar from "../../resources/decals/asher-yatzar.png";
import mitzvahTrain from "../../resources/decals/mitzvah-train.png";

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
        alt="button to open info about KosherLamp Travel"
      ></img>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Travel KosherLamp Info (USA only)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Designed for use at home or across the World. Small size, bright
            light. Take Travel KosherLamp with you wherever you go. A simple
            twist reveals or hides the light on this modern travel size lamp.
            Small enough for travel while still bright enough to light up an
            entire room. It's small enough to fit in a carry-on bag or backpack
            and can even be used for international travel thanks to its
            universal AC/DC power adapter.<br></br>
            <br></br>To keep the Travel KosherLamp steady, the bottom has been
            fitted with non slip rubber pads. Just 1.5lbs (including
            accessories). Comes with AC/DC Power Adapter, Plug Adapter, & Travel
            Bag. Travel KosherLamp in its closed position, is less than half the
            height of the KosherLamp MAX? Now that's convenient!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

class DecalDivs extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "aleph-bet",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=b1e04916143744b383a9d6ffd3c44c7f",
        heading: "Aleph Bet",
        imgSrc: alephBet,
        altTag: "Aleph Bet Wall Decal image",
      },
      {
        id: "asher-yatzar",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=4a7df1614bbb4266842a421036ec4762",
        heading: "Asher Yatzar",
        imgSrc: asherYatzar,
        altTag: "Asher Yatzar Wall Decal image",
      },
      {
        id: "mitzvah-train",
        href: "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=dee5f1ab0ba84d6c9f79a3389bf16b8a",
        heading: "Mitzvah Train",
        imgSrc: mitzvahTrain,
        altTag: "Mitzvah Train Decal image",
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
      alt: "Aleph Bet Decal image",
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
            <h1>Wall ID Decals</h1>
          </div>
          <div className="content">
            <h3>Click On A Type</h3>
            <div className="type">{this.divs}</div>
            <div className="flex-box">
              <a className="decal-cart" href={this.state.href}>
                Add To Cart
              </a>
              <BasicModal />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DecalDivs;
