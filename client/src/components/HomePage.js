import * as React from "react";
import Intro from "./Intro";
import { Container, Typography } from "@mui/material";
import Background from "../assets/kids.png";
import { Box } from "@mui/system";
import Pink from "../assets/pink.png";
import Button from "@mui/material/Button";
import ButtonAppBar from "./Navbar";
import IndexCardHomePage from "./IndexCardHomePage";
import ChildrenHomePage from "./ChildrenHomePage";

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
        <IndexCardHomePage></IndexCardHomePage>
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

        <ChildrenHomePage></ChildrenHomePage>
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
            sx={{ width: "100%", fontSize: "0.9rem", mt: "1rem" }}
          >
            JOIN US NOW!
          </Button>
        </Box>
      </Container>
    </div>
  );
}
export default HomePage;
