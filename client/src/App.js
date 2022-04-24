import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import HomePage from "./components/HomePage";
import ButtonAppBar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>
          <ButtonAppBar></ButtonAppBar>
          <HomePage></HomePage>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
