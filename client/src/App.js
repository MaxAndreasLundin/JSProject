import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import HomePage from "./components/HomePage";
import UpdatedActivityCard from "./components/UpdatedActivityCard";
import Tessst from "./components/Tessst";

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
        <UpdatedActivityCard></UpdatedActivityCard>
        <Tessst></Tessst>
      </div>
    </ThemeProvider>
  );
}
export default App;
