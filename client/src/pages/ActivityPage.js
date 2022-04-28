import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import Background from "../assets/kids2Filter.png";
import ActivityCard from "../components/UpdatedActivityCard";

function ActivityPage() {
  return (
    <React.Fragment>
      <Container
        variant="flex"
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ mb: 6, ml: 1, mr: 1 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontSize: "16px",
            }}
          >
            <h1>Joina en aktivitet!</h1>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#FFFFFF",
              fontSize: "14px",
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
        variant="flex"
        sx={{
          backgroundColor: "#FBEEED",
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
