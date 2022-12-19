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

const ShroomModal = () => {
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
            KosherLamp MAX Info (USA only)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            KosherLamp MAX means the most light with a bigger window. A simple
            twist reveals or hides the light on this innovative reading lamp.
            It's a practical and innovative idea that's perfect in any room Now
            you'll have even more light to read on Shabbos!<br></br>
            <br></br>LED bulbs, energy efficient, new design, easy twist
            technology, beautiful colours, easy to use thumb-switch, and can be
            used on Shabbos according to halacha. It's convenient and easy.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};


export default ShroomModal;