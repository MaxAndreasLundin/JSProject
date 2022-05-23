import React from "react";
import { Box } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import ActivityCard from "../components/ActivityCard";
import Link from "../src/Link";
import { useRouter } from "next/router";
import { db } from "../utils/db";
import AddIcon from "@mui/icons-material/Add";

export const getServerSideProps = async (context) => {
  const res = await db
    .collection("activities")
    .orderBy("createdAt", "desc")
    .get();

  const activity = res.docs.map((activity) => activity.data());

  if (activity.length) {
    return {
      props: {
        activity: JSON.parse(JSON.stringify(activity)),
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

const ActivityPage = (props) => {
  const { activity } = props;
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
              textAlign: "center",
            }}
          >
            <Box sx={{ mb: 6, ml: 1, mr: 1, maxWidth: 375 }}>
              <Typography
                variant="h1"
                sx={{
                  color: "#FFFFFF",
                  mb: 2,
                  mt: 2,
                }}
              >
                Joina en aktivitet!
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
                //  console.log(activity);
                return (
                  <div key={activity._id}>
                    <ActivityCard
                      title={activity.title}
                      content={activity.description}
                      place={activity.place}
                      date={activity.date}
                      time={activity.time}
                      name={activity.name}
                      avatar={activity.avatar}
                      tags={activity.tags}
                      age={activity.age}
                    ></ActivityCard>
                  </div>
                );
              })}
              <Button
                variant="contained"
                color="info"
                component={Link}
                href="/newCard"
                sx={{ position: "fixed", bottom: 20, ml: 12 }}
              >
                <AddIcon /> Skapa en aktivitet
              </Button>
            </div>
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

export default ActivityPage;
