import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import infoBtn from "../../resources/info.webp";
import exitIcon from "../../resources/exit-icon.png";
import KosherClockCarousel from "../../carousels/KosherClockCarousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const KC3Modal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <LazyLoad height={200} offset={100}>
        <img
          onClick={handleOpen}
          className="info-btn"
          src={infoBtn}
          alt="Open product info about KosherClock"
          title="Open product info"
        ></img>
      </LazyLoad>
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
            >
              Back <img src={exitIcon} alt="exit icon"></img>
            </h5>
          </div>
          <div className="product-info">
            <h3 variant="h6" component="h3" className="info-header">
              KosherClock
            </h3>
            <p id="modal-modal-description" component="h4">
              Can be used for Weekdays, Shabbos, Yom Tov, & Travel. Set
              different alarms, for different times, for different days!
              <br></br>
              <br></br> Features - <br></br>Weekday mode: 10 alarms 2 alarm
              volumes quick time setting <br></br>Shabbos & Yom Tov mode: No
              problem with muktzah can't press any buttons alarm shuts off after
              1 minute set multiple alarms to ring 5 minutes apart to act like a
              snooze feature Travel mode: Screen & buttons are protected slim &
              compact for travel
            </p>
          </div>
          <KosherClockCarousel />
        </Box>
      </Modal>
    </>
  );
};

export default KC3Modal;
