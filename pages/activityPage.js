import React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import ActivityCard from "../components/ActivityCard";

import { useRouter } from "next/router";
import db from "../utils/db";

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("http://localhost:3000/api/activities");
//   const data = await res.json();
//   const activity = data.map((activity) => activity.data());
//   // Pass data to the page via props
//   return {
//     props: {
//       activity: activity,
//     },
//   };
// }

export const getStaticProps = async (context) => {
  //  const { slug } = context.params;
  const res = await db.collection("activities").get();
  const activity = res.docs.map((activity) => activity.data());
  if (activity.length) {
    return {
      props: {
        activity: activity,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

// function ActivityPage(props) {
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
                  <div key={activity._id}>
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
