import React from "react";
import { Box } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import ActivityCard from "../components/ActivityCard";
import CreateActivity from "../components/CreateActivity";
import AddIcon from "@mui/icons-material/Add";
import Link from "../src/Link";

import { useRouter } from "next/router";
import { db, auth } from "../utils/db";

export async function getServerSideProps(context) {
  // const { id } = context.params;

  const doc = await db.collection("activities").doc(id).get();

  const activity = {
    id: doc.id,
    ...doc.data(),
  };
  // const snapshot = await db.collection("activities").get();
  // const activity = snapshot.docs.map((doc) => {
  //   return {
  //     id: doc.id,
  //     ...doc.data(),
  //   };
  // });

  // if (activity.length) {
  return {
    props: {
      activity: activity,
    },
  };
  // } else {
  //   return {
  //     props: {},
  //   };
  // }
}

export const ActivityPage = (activity) => {
  // const { activity } = props;
  const router = useRouter();
  if (router.isFallback) {
    return (
      <React.Fragment>
        <div>loading</div>;
      </React.Fragment>
    );
  } else {
    if (activity) {
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
                Här nedan kan du se vilka aktiviteter som våra fina medlemmar
                eller föreningar har satt ihop. <br /> <br />
                Klicka dig igenom och delta eller spara de aktiviteter du tycker
                verkar intressant till nästa gång. Alla medlemmar och
                organisatörer är verifierade med Bank-ID.
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
              {activity.map((activity) => {
                return (
                  <div key={activity.id}>
                    <ActivityCard
                      title={activity.title}
                      content={activity.description}
                      place={activity.place}
                      date={activity.date}
                      time={activity.time}
                      name={activity.name}
                      avatar={activity.avatar}
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
    } else {
      return (
        <React.Fragment>
          <div>not found</div>;
        </React.Fragment>
      );
    }
  }
};
