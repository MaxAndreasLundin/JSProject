import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { memo } from "react";
import Button from "@mui/material/Button";
import Link from "../src/Link";

function Intro() {
  return (
    <React.Fragment>
      <Container
        variant="flex"
        maxWidth="sm"
        sx={{
          mb: 8,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 4,
              mt: 5,
              color: "#FFFFFF",
            }}
          >
            Välkommen till Join
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              ml: 3,
              mr: 3,
              mb: 2,
              color: "#FFFFFF",
            }}
          >
            Tänk dig ett samhälle där alla är kompisar. Vi har nog alla känt oss
            ensamma eller utanför någon gång, eller hur? Den känslan går oftast
            över ganska snabbt, men för många barn så är ensamheten ett ständigt
            tillstånd och en del av deras vardag.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Button
              variant="contained"
              sx={{ mr: 1, width: "9rem", fontSize: "0.9rem" }}
              component={Link}
              href="/createUser"
            >
              SKAPA PROFIL
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="info"
              sx={{ ml: 1, width: "9rem", fontSize: "0.9rem" }}
            >
              LOGGA IN
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default memo(Intro);
