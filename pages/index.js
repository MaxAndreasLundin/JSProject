import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import IndexCard from "../components/IndexCards";
import Intro from "../components/Intro";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "../src/Link";

export default function Index() {
  return (
    <React.Fragment>
      <Container
        variant="flex"
        sx={{
          backgroundImage: `url(/pictures/twokids.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: 0,
        }}
      >
        <Intro></Intro>

        <IndexCard title="Hitta aktivitet">
          Här kan du se vilka aktiviteter som våra fina medlemmar eller
          föreningar har satt ihop.
        </IndexCard>
        <IndexCard title="Öppet forum">
          Dela med dig av tidigare erfarenheter och läs andras historier.
          Tillsammans är vi starka. PS. Du kan vara helt anonym i forumet.
        </IndexCard>
        <IndexCard title="Professionel hjälp">
          Det finns flera stödföreningar där du kan få stöd och hjälp via. Här
          har vi samlat några!
        </IndexCard>
      </Container>
      <Container
        variant="flex"
        sx={{
          backgroundImage: `url(/pictures/pink.png)`,
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
            display: "flex",
            mt: 1,
          }}
        >
          <Image
            src="/pictures/kids1.png"
            alt="kids1"
            width={344}
            height={248}
          />
        </Box>
        <Box
          sx={{
            mt: 1,
            mb: 1,
          }}
        >
          <Image
            src="/pictures/kids2.png"
            alt="Kids2"
            width={344}
            height={248}
          />
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
            component={Link}
            href="/createUser"
          >
            JOIN US NOW!
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
