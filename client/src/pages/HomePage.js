import * as React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import IndexCard from "../components/IndexCard";
import ForumCard from "../components/ForumCard";
import HelpCard from "../components/HelpCard";
import Intro from "../components/Intro";
import Background from "../assets/kids.png";
import Kids1 from "../assets/kids1.png";
import Pink from "../assets/pink.png";
import Kids2 from "../assets/kids2.png";
import Button from "@mui/material/Button";

function HomePage() {
  return (
    <React.Fragment>
      <Container
        variant="flex"
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 0,
        }}
      >
        <Intro></Intro>
        <IndexCard title="Hitta aktivitet"></IndexCard>
        <ForumCard title="Öppet forum"></ForumCard>
        <HelpCard title="Professionel hjälp"></HelpCard>
      </Container>
      <Container
        variant="flex"
        sx={{
          backgroundImage: `url(${Pink})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 0,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 2,
              mt: 6,
              color: "##3A3A3A",
              fontSize: "2.5rem",
            }}
          >
            Tillsammans mot ensamheten
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 1,
          }}
        >
          <img src={Kids1} alt="Kids1" sx={{ width: "100%", height: "auto" }} />
        </Box>
        <Box
          sx={{
            mt: 1,
            mb: 1,
          }}
        >
          <img src={Kids2} alt="Kids2" sx={{ width: "100%", height: "auto" }} />
        </Box>
        <Box
          sx={{
            mt: 1,
            mb: 1,
            p: 1.5,
          }}
        >
          <Typography align="center">
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
    </React.Fragment>
  );
}
export default HomePage;
