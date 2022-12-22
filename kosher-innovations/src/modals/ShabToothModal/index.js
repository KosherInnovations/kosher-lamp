import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import ScrollDown from "../../resources/scrolling.png";
import ShabToothCarousel from "../../carousels/ShabToothCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShabtoothModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="button to open info about Shabbos Toothbrush"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-box" >
          <div className="product-info">
          <h3 variant="h6" component="h3">
            Shabbos Toothbrush
          </h3>
          <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
            Brush your teeth on Shabbos with these halachically approved special
            Toothbrushes! 4 pack comes with Red, Yellow, Purple and Blue.
            Shabbos Toothbrush™ ensures that melachos are avoided (Sechitah,
            Chavalah, Memareach and Uvdin D'Chol), allowing you to brush your
            teeth on Shabbos according to all opinions.<br></br>
            <br></br>*Permissible for use with liquid mouthwash.<br></br>
            Features: Soft Latex rubber "bristles" won't make gums bleed Widely
            spaced "bristles" won't squeeze liquid
          </p></div>
          <ShabToothCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default ShabtoothModal;
