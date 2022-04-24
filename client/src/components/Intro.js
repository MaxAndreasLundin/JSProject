import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { memo } from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <React.Fragment>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mb: 8,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              mt: 3,
              color: "#FFFFFF",
            }}
          >
            Tänk dig ett samhälle där alla är kompisar
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              ml: 3,
              mr: 3,
              mb: 2,
              color: "#FFFFFF",
            }}
          >
            Vi har nog alla känt oss ensamma eller utanför någon gång, eller
            hur? Den känslan går oftast över ganska snabbt, men för många barn
            så är ensamheten ett ständigt tillstånd och en del av deras vardag.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box>
            <Button
              variant="contained"
              sx={{ mr: 1, width: "9rem", fontSize: "0.9rem" }}
              component={Link}
              to="/activities"
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
