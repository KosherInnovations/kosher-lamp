import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.webp";
import exitIcon from "../../resources/exit-icon.png";
import WeekToothCarousel from "../../carousels/WeekToothCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WeekToothModal = () => {
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
          alt="Open product info about Uncle Moishy Weekday Toothbrush"
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
              Uncle Moishy Weekday Toothbrush
            </h3>
            <p id="modal-modal-description" component="h4">
              Uncle Moishy Weekday Toothbrush is a fun way to promote oral
              hygiene for children between the ages of 2 and 9. These bright
              toothbrushes come packed together in a colorful and affordable
              4-pack.<br></br>
              <br></br>The 4 pack includes a Yellow, Red, Green, & Blue.
              Cushioned brush head protects tender gums. The attached tongue
              cleaner is designed to promote fresh breath
            </p>
          </div>
          <WeekToothCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default WeekToothModal;
