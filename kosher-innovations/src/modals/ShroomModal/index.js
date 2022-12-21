import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.png";
import ShroomCarousel from "../../carousels/ShroomCarousel";

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
        alt="button to open info about Mushroom KosherLamp"
      ></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 variant="h6" component="h3">
            Mushroom KosherLamp
          </h3>
          <p
            id="modal-modal-description"
            sx={{ mt: 2 }}
            component="h4"
          >
            Raise or lower the mushroom cap to hide the light or let it shine.
            Just like the original KosherLamps, you can adjust the light until
            it's just right. Enough light to light up the bedroom, the Mushroom
            KosherLamp is perfect for reading in bed, doing a puzzle or enjoying
            a quiet activity. With four different light settings to get the
            light just right, your child will want to use Mushroom KosherLamp
            every night!<br></br>
            <br></br>Did you know? Yes, there really is a red mushroom with
            white spots in nature. It's called the Amanita Muscaria They can be
            found in the forests of the Northern Hemisphere. These mushrooms add
            vibrant color to forest scenery but are not meant for human
            consumption. Many artists like to add amanita mushrooms to
            illustrations in children's books since they are so decorative.
          </p>
          <ShroomCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default ShroomModal;
