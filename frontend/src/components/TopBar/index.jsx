import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./styles.css";

function TopBar() {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography className="topbar-title" variant="h5">
          This is the TopBar component
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;