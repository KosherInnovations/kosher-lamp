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
            Smart Shissel
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A spill resistant Negel Vasser Bowl. The Smart Shissel has a one way
            drain that traps water inside, leaving it covered and spill proof.
            Tomei water is fully covered after washing. Carry the bowl without
            spilling. If tipped upside down, water remains in inner bowl. Open the
            plug to pour out used water.<br></br><br></br>Encourage your children to wash without
            worrying about spills or mess. After washing, water flows to the
            lower bowl and children won’t be able to play in used water. Children can’t
            spill water all over themselves, the carpet, the furniture, or dunk
            their toys in it.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ShisselModal;
