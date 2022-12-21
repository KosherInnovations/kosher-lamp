import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import FridgeezCarousel from "../../carousels/FridgeezCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FridgeezModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="button to open info about Kosher Fridg-eez"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            Fridg-eez
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="h4"
          >
            Kosher Fridg-eez holds down your fridge or freezer light switch
            during Shabbos or Yom Tov. We all need a way to keep the light off
            during Shabbos or Yom Tov, that is what the Kosher Fridg-eez is for.
            When Shabbos or Yom Tov is over, simply pull the plastic tab to
            remove it, letting the fridge light shine again. Fridg-eez is a
            simple and inexpensive solution to a common problem.<br></br>
            <br></br>How it works: Kosher Fridg-eez™ is made from reusable
            velcro. Just stick the two small Fridg-eez strips on either side of
            the light switch and use the long Fridg-eez velcro strip to hold
            down the light switch.<br></br>Includes: -2 small self-adhesive
            velcro strips -1 large velcro strip with sturdy pull-tab Why use
            Kosher Fridg-eez™? It comes ready to use Efficient Convenient
            Inexpensive Easy to use Reliable quality
          </Typography>
          < FridgeezCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default FridgeezModal;
