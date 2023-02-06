import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.webp";
import KmaxCarousel from "../../carousels/KmaxCarousel";
import AnimateModal  from "../../AnimateModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const KmaxModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const infoHeader = useRef(null);

  return (
    <>
      <img
        onClick={() => { handleOpen(); AnimateModal(infoHeader); }}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about KosherLamp MAX"
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
            {/* changing the x button to the div with back */}
            <h5
              onClick={handleClose}
              title="Exit the product info section"
              alt="exit icon"
              className="exit-btn"
            >
              Back
            </h5>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3" className="info-header" ref={infoHeader}>
              KosherLamp MAX Info
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              KosherLamp MAX means the most light with a bigger window. A simple
              twist reveals or hides the light on this innovative reading lamp.
              It's a practical and innovative idea that's perfect in any room
              Now you'll have even more light to read on Shabbos!<br></br>
              <br></br>
              LED bulbs, energy efficient, new design, easy twist technology,
              beautiful colours, easy to use thumb-switch, and can be used on
              Shabbos according to halacha. It's convenient and easy.
            </p>
          </div>
          <KmaxCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default KmaxModal;
