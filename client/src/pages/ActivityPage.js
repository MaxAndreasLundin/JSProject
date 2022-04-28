import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import Background from "../assets/kids2Filter.png";
import Pink from "../assets/pink.png";
import ActivityCard from "../components/UpdatedActivityCard";

function ActivityPage() {
  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 0,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            align="left"
            sx={{
              ml: -14,
              mb: 2,
              mt: 3,
              color: "#FFFFFF",
              fontSize: "16px",
            }}
          >
            <h1>Joina en aktivitet!</h1>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            align="left"
            sx={{
              ml: 3,
              mr: 3,
              mb: 2,
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "regular",
            }}
          >
            Här nedan kan du se vilka aktiviteter som våra fina medlemmar eller
            föreningar har satt ihop. <br /> <br />
            Klicka dig igenom och delta eller spara de aktiviteter du tycker
            verkar intressant till nästa gång. Alla medlemmar och organisatörer
            är verifierade med Bank-ID.
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Pink})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 0,
        }}
      >
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </Container>
    </React.Fragment>
  );
}

export default ActivityPage;
