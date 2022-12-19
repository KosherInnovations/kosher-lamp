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

const GoWashModal = () => {
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
            Go Wash (Portable washing cup)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The Collapsible Washing Cup. Made of sturdy silicone, this handy
            travel accessory is designed to hold the halachically required
            amount of water. Small enough to fit in a purse, hand bag and many
            coat and pants pockets.<br></br>
            <br></br>Go Wash collapses on itself to take up less space so you
            can take it wherever you go. Highly durable & made of sturdy,
            flexible silicone so you don't have to worry about it breaking from
            being dropped or being squished by heavy items in your travel bag.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default GoWashModal;
