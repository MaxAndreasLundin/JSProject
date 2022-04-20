import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import ActivityCard from "./components/ActivityCard";
import IndexCard from "./components/IndexCard";
import Intro from "./components/Intro";

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
        <div>
          <ActivityCard title="Korvgrillning"></ActivityCard>
          <IndexCard title="Hitta aktivitet"></IndexCard>
          <IndexCard title="Öppet forum"></IndexCard>
          <IndexCard title="Professionel hjälp"></IndexCard>
        </div>
        {typeof backendData.users === "undefined" ? (
          <div>
            <Intro></Intro>
          </div>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </ThemeProvider>
  );
}
export default App;
