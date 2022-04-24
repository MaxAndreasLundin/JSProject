import * as React from "react";
import IndexCard from "./IndexCard";
import Intro from "./Intro";
import { Container, Typography } from "@mui/material";
import Background from "../assets/kids.png";
import { Box } from "@mui/system";
import Kids1 from "../assets/kids1.png";
import Pink from "../assets/pink.png";
import Kids2 from "../assets/kids2.png";
import Button from "@mui/material/Button";

function HomePage() {
  return (
    <div>
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
        <Intro></Intro>
        <IndexCard title="Hitta aktivitet"></IndexCard>
        <IndexCard title="Öppet forum"></IndexCard>
        <IndexCard title="Professionel hjälp"></IndexCard>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 1,
            mb: 1,
          }}
        >
          <img
            src={Kids1}
            alt="Kids1"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 1,
            mb: 1,
          }}
        >
          <img
            src={Kids2}
            alt="Kids2"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
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
