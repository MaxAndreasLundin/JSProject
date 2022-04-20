import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="info">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton size="large">
            <MessageIcon />
          </IconButton>
          <IconButton size="large">
            <PersonOutlineIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
