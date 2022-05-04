import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import ActivityCard from "../components/ActivityCard";
import fetch from "isomorphic-unfetch";

function ActivityPage({ cards }) {
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
        <div>
          {cards.map((card) => {
            return (
              <div key={card._id}>
                <ActivityCard
                  title={card.title}
                  content={card.description}
                ></ActivityCard>
              </div>
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
}

ActivityPage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/cards");
  const { data } = await res.json();

  return { cards: data };
};

export default ActivityPage;
