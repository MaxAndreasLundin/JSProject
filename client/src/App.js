import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import IndexCard from "./components/IndexCard";
import Intro from "./components/Intro";
import { Container, Typography } from "@mui/material";
import Image from "./kids.png";
import { Box } from "@mui/system";
import Kids1 from "./kids1.png";
import Pink from "./pink.png";
import Kids2 from "./kids2.png";
import Button from "@mui/material/Button";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {typeof backendData.users === "undefined" ? (
          <div>
            <Container
              maxWidth="sm"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Intro></Intro>
              <IndexCard title="Hitta aktivitet"></IndexCard>
              <IndexCard title="Öppet forum"></IndexCard>
              <IndexCard title="Professionel hjälp"></IndexCard>
            </Container>
            <Container
              maxWidth="sm"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${Pink})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
                  sociala sammanhang och kontakter, inte bara för våra barn utan
                  även för oss själva.
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
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </ThemeProvider>
  );
}
export default App;
