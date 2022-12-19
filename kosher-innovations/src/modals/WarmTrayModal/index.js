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

const BasicModal = () => {
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
            Shabbos Safe Warming Tray (TechYidCo)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Designed to safely keep your food warm on Shabbos and Yom Tov.
            Features stainless steel (kasher-able) surface and built in
            electrical safeguards. Designed by a Frum Electronic Engineering
            Technician with safety and Halachic compliance first in mind, the
            patented design allows the end user a safe, dependable and durable
            way to keep their food warm on Shabbos and Yom Tov. Shabbos Safe
            Warming Tray mimics a traditional Jewish blech, & the design allows
            your halachically permissible food to be warmed, but makes Halachic
            Bishul (cooking) difficult to attain.<br></br><br></br>The
            Warming Tray is ETL Safety Certified and designed with over 5
            individual safety features. Features: Beautiful & Durable Brushed
            Stainless Steel Housing Rubberized handles Revolutionary Patent
            Pending Design Engineered for Long Term Use Safe, Reliable and
            Energy Efficient Approved by All Halachic Standards for Shabbos and
            Yom Tov Use Can be Kashered for Pesach (please consult your local
            Rabbi or Halachic Authority).
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
