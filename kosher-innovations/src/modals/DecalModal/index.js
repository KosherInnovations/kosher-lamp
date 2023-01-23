import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/information.png";
import exitBtn from "../../resources/exit-btn.png";
import DecalCarousel from "../../carousels/DecalCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DecalModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        onClick={handleOpen}
        className="info-btn"
        src={infoBtn}
        alt="Open product info about Jewish Wall Decals"
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
            <img
              onClick={handleClose}
              src={exitBtn}
              title="Exit the product info section"
              alt="exit icon"
              className="exit-btn"
            ></img>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3">
              Jewish Wall Decals
            </h3>
            <p id="modal-modal-description" sx={{ mt: 2 }} component="h4">
              Decorate your walls High quality vinyl Decals that can be placed
              on your walls and repositioned without damaging the walls. These
              colorful decals are a perfect way to express your creativity and
              love for Jewish values in your home.<br></br>
              <br></br>We offer:<br></br>Aleph Bet Decals, Asher Yatzar Decals,
              Mitzvah Train Decals<br></br>Easy To Use. Keep your walls clean
              and free from holes! No tools required. It is Peel-Stick-Easy!
              Remove and Re-apply anytime. Bring meaning into your home. Show
              your love for Jewish values in your decor. Jewish Wall Decals fuse
              tradition with beautiful designs, highlighting your uniqueness.
            </p>
          </div>
          <DecalCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default DecalModal;
