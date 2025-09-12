import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Order Delivery App</Typography>
      </Toolbar>
    </AppBar>
  );
}
