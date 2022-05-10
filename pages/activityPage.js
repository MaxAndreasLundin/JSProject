import React from "react";
import { Box } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import ActivityCard from "../components/ActivityCard";
import fetch from "isomorphic-unfetch";
import AddIcon from "@mui/icons-material/Add";
import Link from "../src/Link";

let dbName = process.env.MONGODB_DB;

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
        <Box
          sx={{
            mb: 6,
            ml: 1,
            mr: 1,
            maxWidth: 375,
            textAlign: "center",
          }}
        >
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
          pb: 8,
        }}
      >
        <div>
          {cards.map((card) => {
            return (
              <div key={card._id}>
                <ActivityCard
                  title={card.title}
                  content={card.description}
                  place={card.place}
                  date={card.date}
                  time={card.time}
                  name={card.name}
                  avatar={card.avatar}
                ></ActivityCard>
              </div>
            );
          })}
        </div>
        <Button
          variant="contained"
          color="info"
          component={Link}
          href="/createActivity"
          sx={{ position: "fixed", bottom: 20 }}
        >
          <AddIcon /> Skapa en aktivitet
        </Button>
      </Container>
    </React.Fragment>
  );
}

ActivityPage.getInitialProps = async () => {
  const res = await fetch(dbName);
  const { data } = await res.json();

  return { cards: data };
};

export default ActivityPage;
