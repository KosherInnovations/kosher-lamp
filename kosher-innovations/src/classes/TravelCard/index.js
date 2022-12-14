import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import travelWhite from "../../resources/travel-lamp/white-travel.png";
import travelGrey from "../../resources/travel-lamp/grey-travel.png";
import travelBlack from "../../resources/travel-lamp/black-travel.png";
import travelBrown from "../../resources/travel-lamp/brown-travel.png";

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

class travelCard extends React.Component {
  constructor(props) {
    super(props);

    // Create an array of items
    this.items = [
      {
        id: "white",
        href: "https://www.kosherimage.com/cmd.php?pid=0f59cbfeb19f4a47a417c0ae1c1c3d32",
        imgSrc: travelWhite,
        altTag: "Travel Lamp White Image",
      },
      {
        id: "grey",
        href: "https://www.kosherimage.com/cmd.php?pid=156ef0e192fb4009886fa0e1389288ae",
        imgSrc: travelGrey,
        altTag: "Travel Lamp Grey Image",
      },
      {
        id: "black",
        href: "https://www.kosherimage.com/cmd.php?pid=cd4dc5f4693e42f79a70913656236248",
        imgSrc: travelBlack,
        altTag: "Travel Lamp Black Image",
      },
      {
        id: "brown",
        href: "https://www.kosherimage.com/cmd.php?pid=a4642f2f517f4c9ab9f6e356a749412c",
        imgSrc: travelBrown,
        altTag: "Travel Lamp Brown Image",
      },
    ];

    // Create an array of div elements with click handlers
    this.divs = this.items.map((item) => {
      return (
        <div
          key={item.id}
          className="color-picker travel"
          id={`travel-${item.id}`}
          onClick={() => this.handleClick(item)}
        ></div>
      );
    });

    this.state = {
      href: "https://www.kosherimage.com/cmd.php?pid=0f59cbfeb19f4a47a417c0ae1c1c3d32", // Set the initial href for the add to cart button
      src: travelWhite,
      alt: "Travel Lamp White Image",
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
            <h1>Travel Lamp</h1>
          </div>
          <div className="content">
            <BasicModal />
            <h3>Click On A Color</h3>
            <div className="color">{this.divs}</div>
            <a className="travel-cart" href={this.state.href}>
              Add To Cart
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default travelCard;
