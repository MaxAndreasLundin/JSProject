import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import IndexCard from "./components/IndexCard";
import Intro from "./components/Intro";
import { Container } from "@mui/material";
import Image from "./kids.png";

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
          </div>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </ThemeProvider>
  );
}
export default App;
