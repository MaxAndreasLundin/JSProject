import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import ActivityCard from "../components/ActivityCard";

function ActivityPage() {
  return (
    <React.Fragment>
      <Container
        variant="flex"
        sx={{
          backgroundImage: `url(/pictures/kids2Filter.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ mb: 6, ml: 1, mr: 1, maxWidth: 375 }}>
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
        <ActivityCard>Korvgrillning</ActivityCard>
        <ActivityCard>Spela Xbox</ActivityCard>
        <ActivityCard>Brännboll</ActivityCard>
      </Container>
    </React.Fragment>
  );
}

export default ActivityPage;
