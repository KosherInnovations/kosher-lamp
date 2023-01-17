import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.png";
import exitBtn from "../../resources/exit-btn.png";
import GoWashCarousel from "../../carousels/GoWashCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const GoWashModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about Go Wash"
        title="Open product info"
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
            <h3 variant="h6" component="h3">
              Go Wash (Portable washing cup)
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              The Collapsible Washing Cup. Made of sturdy silicone, this handy
              travel accessory is designed to hold the halachically required
              amount of water. Small enough to fit in a purse, hand bag and many
              coat and pants pockets.<br></br>
              <br></br>Go Wash collapses on itself to take up less space so you
              can take it wherever you go. Highly durable & made of sturdy,
              flexible silicone so you don't have to worry about it breaking
              from being dropped or being squished by heavy items in your travel
              bag.
            </p>
          </div>
          <GoWashCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default GoWashModal;
