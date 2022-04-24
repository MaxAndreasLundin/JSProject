import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
