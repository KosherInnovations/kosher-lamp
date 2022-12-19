import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";

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
        alt="button to open info about KosherLamp MAX"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Shabbos Bathroom Tissue
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Easy and convenient. Halachically permissible, Real pre-cut toilet
            paper in a unique box. No tearing! Hangs on any roll-holder! Now
            softer, stronger and with beautiful nature-themed boxes. Comes in
            Blue, Gold, Purple, & Brown<br></br>
            <br></br> Includes: 120 sheets of 2 ply tissues per box Unique box
            that dispenses sheets and hangs from roll holder
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default TissueModal;
