import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.webp";
import exitIcon from "../../resources/exit-icon.png";
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
      <LazyLoad height={200} offset={100}>
        <img
          onClick={handleOpen}
          className="info-btn"
          src={infoBtn}
          alt="Open product info about Shabbos Scrub Gloves"
          title="Open product info"
        ></img>
      </LazyLoad>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="modal-box">
          <div className="exit-btn-container">
            <h5
              onClick={handleClose}
              title="Exit the product info section"
              alt="exit icon"
              className="exit-btn"
            >
              Back <img src={exitIcon} alt="exit icon"></img>
            </h5>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3" className="info-header">
              Shabbos Scrub Gloves
            </h3>
            <p id="modal-modal-description" component="h4">
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
