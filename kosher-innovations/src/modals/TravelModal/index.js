import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.png";
import exitBtn from "../../resources/exit-btn.png";
import TravelCarousel from "../../carousels/TravelCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TravelModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="button to open info about Travel KosherLamp "
      ></img>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box">
          <img
            onClick={handleClose}
            src={exitBtn}
            title="Exit the product info section"
            alt="exit icon"
            className="exit-btn"
          ></img>
          <div className="product-info">
            <h3 id="modal-modal-title" variant="h6" component="h3">
              Travel KosherLamp
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }}>
              Designed for use at home or across the World. Small size, bright
              light. Take Travel KosherLamp with you wherever you go. A simple
              twist reveals or hides the light on this modern travel size lamp.
              Small enough for travel while still bright enough to light up an
              entire room. It's small enough to fit in a carry-on bag or
              backpack and can even be used for international travel thanks to
              its universal AC/DC power adapter.<br></br>
              <br></br>To keep the Travel KosherLamp steady, the bottom has been
              fitted with non slip rubber pads. Just 1.5lbs (including
              accessories). Comes with AC/DC Power Adapter, Plug Adapter, &
              Travel Bag. Travel KosherLamp in its closed position, is less than
              half the height of the KosherLamp MAX? Now that's convenient!
            </p>
          </div>
          <TravelCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default TravelModal;
