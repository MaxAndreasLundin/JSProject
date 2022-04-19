import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import ActivityCard from "./components/ActivityCard";
import IndexCard from "./components/IndexCard";

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
          </div>
     
      </div>
    </ThemeProvider>
  );
}
export default App;
