import * as React from "react";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import IndexCard from "../components/IndexCard";
import Intro from "../components/Intro";
import Background from "../assets/newbackground.png";
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
          backgroundPosition: "20%20%",
          p: 0,
        }}
      >
        <Intro></Intro>
        <IndexCard
          title="Hitta aktivitet"
          children="Här kan du se vilka aktiviteter som våra fina medlemmar eller föreningar har satt ihop. "
        ></IndexCard>
        <IndexCard
          title="Öppet forum"
          children="Dela med dig av tidigare erfarenheter och läs andras historier.
          Tillsammans är vi starka. PS. Du kan vara helt anonym i forumet."
        ></IndexCard>{" "}
        <IndexCard
          title="Professionel hjälp"
          children="Det finns flera stödföreningar där du kan få stöd och hjälp via.
          Här har vi samlat några!"
        ></IndexCard>{" "}
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
            sx={{ width: "50%", fontSize: "0.9rem", mt: "1rem", ml: "25%" }}
          >
            JOIN US NOW!
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default HomePage;
