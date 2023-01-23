import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.png";
import exitBtn from "../../resources/exit-btn.png";
import BugCheckerCarousel from "../../carousels/BugCheckerCarousel";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about Bug Checker MAX"
        title="Open product info"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box">
          <div className="exit-btn-container">
            <img
              onClick={handleClose}
              src={exitBtn}
              title="Exit the product info section"
              alt="exit icon"
              className="exit-btn"
            ></img>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3">
              Bug Checker MAX Info
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              A portable light board. It shines through the leaves but not the
              bugs. Bug Checker MAX is a steady, bright light - perfect for
              examining produce for insects. This makes it easy to check a
              variety of fresh produce such as lettuces, herbs and other leafy
              vegetables. The bright light illuminates the leaves and makes any
              insects appear as dark spots. They're much easier to spot when the
              leaf is lit up.
              <br></br>
              <br></br>You don't have to avoid the fresh vegetable section of
              your supermarket any longer. Now you can have really great salads,
              prepare more interesting dishes, and up your vitamin intake. A
              great way to check veggies quickly and thoroughly adhering to the
              highest kosher standards as recommended by the Orthodox Union.
              Check carefully, Check comfortably, Check confidently.
            </p>
          </div>
          <BugCheckerCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
