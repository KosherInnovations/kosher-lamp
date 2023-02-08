import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.webp";
import ShisselCarousel from "../../carousels/ShisselCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShisselModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about Smart Shissel"
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
            <h5
              onClick={handleClose}
              title="Exit the product info section"
              alt="exit icon"
              className="exit-btn"
            >Back</h5>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3" className="info-header">
              Smart Shissel
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              A spill resistant Negel Vasser Bowl. The Smart Shissel has a one
              way drain that traps water inside, leaving it covered and spill
              proof. Tomei water is fully covered after washing. Carry the bowl
              without spilling. If tipped upside down, water remains in inner
              bowl. Open the plug to pour out used water.<br></br>
              <br></br>Encourage your children to wash without worrying about
              spills or mess. After washing, water flows to the lower bowl and
              children won’t be able to play in used water. Children can’t spill
              water all over themselves, the carpet, the furniture, or dunk
              their toys in it.
            </p>
          </div>
          <ShisselCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default ShisselModal;