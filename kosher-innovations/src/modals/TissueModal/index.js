import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import ScrollDown from "../../resources/scrolling.png";
import TissueCarousel from "../../carousels/TissueCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TissueModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="button to open info about Shabbos Bathroom Tissue"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-box">
          <div className="product-info">
            <h3 variant="h6" component="h3">
              Shabbos Bathroom Tissue
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              Easy and convenient. Halachically permissible, Real pre-cut toilet
              paper in a unique box. No tearing! Hangs on any roll-holder! Now
              softer, stronger and with beautiful nature-themed boxes. Comes in
              Blue, Gold, Purple, & Brown<br></br>
              <br></br> Includes: 120 sheets of 2 ply tissues per box Unique box
              that dispenses sheets and hangs from roll holder
            </p>
          </div>
          <TissueCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default TissueModal;
