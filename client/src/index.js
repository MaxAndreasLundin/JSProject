import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

reportWebVitals();
