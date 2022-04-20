import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Logo from "../assets/Vector.svg";

export default function ButtonAppBar() {
  return (
    <Box style={{ width: "100%" }}>
      <AppBar position="static" color="info">
        <Toolbar style={{ width: "100%" }}>
          <Box
            style={{
              display: "flex",
              flexGrow: 1,
              flexBasis: 0,
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              flexBasis: 0,
            }}
          >
            <IconButton>
              <img src={Logo} alt="logo" />
            </IconButton>
          </Box>
          <Box
            style={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "flex-end",
              flexBasis: 0,
            }}
          >
            <IconButton size="large">
              <MessageIcon />
            </IconButton>
            <IconButton size="large" style={{ paddingRight: 0 }}>
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
