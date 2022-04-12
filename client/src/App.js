import React, { useEffect, useState } from "react";
import Korvkort from "./Korvkort";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFE99D",
    },
  },
  typography: {
    fontFamily: "Buenos Aires",
  },
});

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
            <Korvkort title="Korvgrillning"></Korvkort>
          </div>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </ThemeProvider>
  );
}
export default App;
