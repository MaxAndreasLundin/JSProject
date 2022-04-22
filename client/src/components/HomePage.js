import * as React from "react";
import Intro from "./Intro";
import { Container, Typography } from "@mui/material";
import Background from "../assets/kids.png";
import { Box } from "@mui/system";
import Pink from "../assets/pink.png";
import Button from "@mui/material/Button";
import ButtonAppBar from "./Navbar";
import Kids1 from "../assets/kids1.png";
import Kids2 from "../assets/kids2.png";
import IndexCard from "./IndexCard";
import { Grid } from "@mui/material";

function HomePage() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 0,
        }}
      >
        <ButtonAppBar></ButtonAppBar>
        <Intro></Intro>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <IndexCard title="Hitta aktivitet"></IndexCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <IndexCard title="Öppet forum"></IndexCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <IndexCard title="Professionel hjälp"></IndexCard>
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${Pink})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 0,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              mt: 6,
              color: "##3A3A3A",
              textAlign: "center",
              fontSize: "2.5rem",
            }}
          >
            Tillsammans mot ensamheten
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={4} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: 1,
              }}
            >
              <img
                src={Kids1}
                alt="Kids1"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: 1,
              }}
            >
              <img
                src={Kids2}
                alt="Kids2"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 1,
            mb: 1,
            p: 1.5,
            textAlign: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 1,
            mb: 1,
            p: 1.5,
            textAlign: "center",
          }}
        >
          <Typography>
            Vi tror på att dela med sig av sina erfarenheter och känslor,
            föräldrar emellan. Och tillsammans kan vi mötas och skapa nya
            sociala sammanhang och kontakter, inte bara för våra barn utan även
            för oss själva.
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "50%", fontSize: "0.9rem", mt: "1rem" }}
          >
            JOIN US NOW!
          </Button>
        </Box>
      </Container>
    </div>
  );
}
export default HomePage;
