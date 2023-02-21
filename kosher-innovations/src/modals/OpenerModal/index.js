import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.webp";
import exitIcon from "../../resources/exit-icon.png";
import OpenerCarousel from "../../carousels/OpenerCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OpenerModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about Shabbos Bottle Opener"
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
            >Back {" "} <img src={exitIcon} alt="exit icon"></img></h5>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3" className="info-header">
              Shabbos Bottle Opener
            </h3>
            <p id="modal-modal-description" component="h4">
              Open plastic soda and seltzer bottles on Shabbos and Yom Tov. This
              handy device removes the bottle cap without tearing the
              tamper-proof ring. Approved by major Rabbonim. For many years,
              opening bottle caps on Shabbos (even plastic) has been a great
              dispute among the leading poskim.<br></br>
              <br></br>How does the Shabbos Bottle Opener solve the problem?
              When one opens a bottle with the Shabbos bottle opener, the cap
              comes off with the ring intact, no מאלכה has occurred. Many people
              took on the more lenient opinion because of the difficulty of not
              being able to open bottles on Shabbos. Now that a solution has
              been created, it’s definitely recommended to follow the majority
              of the Poskim that agreed that its אסור.
            </p>
          </div>
          <OpenerCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default OpenerModal;
