import * as React from "react";
import { Link } from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { memo } from "react";
import Image from "next/image";

function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="info">
        <Toolbar>
          <Box
            sx={{
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
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              flexBasis: 0,
            }}
          >
            <IconButton component={Link} href="/">
              <Image
                src="/pictures/logoSmall.png"
                alt="heartlogo"
                width={27}
                height={32}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
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

export default memo(Navbar);
