import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.png";
import exitBtn from "../../resources/exit-btn.png";
import GloveCarousel from "../../carousels/GloveCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const GlovesModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about Shabbos Scrub Gloves"
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
              Shabbos Scrub Gloves
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              Shabbos Scrub Gloves are composed of super durable silicone that
              protects your hands from cold water and harsh chemicals when
              washing your dishes. Featuring innovative bristles on the fingers
              and palm which makes scrubbing a breeze.<br></br>
              <br></br>These gloves are approved by rabbinic authorities and are
              highly recommended for use on Shabbos, Yom Tov & anytime. Please
              Consult With Your Personal Rov For The Halachos Of Washing Dishes
              On Shabbos And Yom Tov.
            </p>
          </div>
          <GloveCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default GlovesModal;
