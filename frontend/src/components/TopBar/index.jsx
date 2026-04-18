import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./styles.css";

function TopBar() {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography className="topbar-title" variant="h5">
          Phạm Duy Cường
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;