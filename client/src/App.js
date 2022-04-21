import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import HomePage from "./components/HomePage";

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
            <HomePage></HomePage>
          </div>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </ThemeProvider>
  );
}
export default App;
