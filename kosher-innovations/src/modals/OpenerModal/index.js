import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";import ScrollDown from "../../resources/scrolling.png";
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
        alt="button to open info about Shabbos Bottle Opener"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 variant="h6" component="h3">
            Shabbos Bottle Opener
          </h3>
          <p
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="h4"
          >
            Open plastic soda and seltzer bottles on Shabbos and Yom Tov. This
            handy device removes the bottle cap without tearing the tamper-proof
            ring. Approved by major Rabbonim. For many years, opening bottle
            caps on Shabbos (even plastic) has been a great dispute among the
            leading poskim.<br></br>
            <br></br>How does the Shabbos Bottle Opener solve the problem? When
            one opens a bottle with the Shabbos bottle opener, the cap comes off
            with the ring intact, no מאלכה has occurred. Many people took on the
            more lenient opinion because of the difficulty of not being able to
            open bottles on Shabbos. Now that a solution has been created, it’s
            definitely recommended to follow the majority of the Poskim that
            agreed that its אסור.
          </p>
          <div className="scroll-logo-box">
            <img
              className="scroll-logo"
              src={ScrollDown}
              alt="scroll down to read more"
            ></img>
          </div>
          <OpenerCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default OpenerModal;
