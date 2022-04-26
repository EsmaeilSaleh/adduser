import React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ position: "absolute", bottom: 0 }}>
      <Divider sx={{ width: "98vw", border: "1px solid grey" }}></Divider>
      <Typography
        sx={{ textAlign: "center", padding: "0.5em", color: "#8f8f8f" }}
      >
        Coded Proudly by Esmaeil Saleh
      </Typography>
    </Box>
  );
};

export default Footer;
