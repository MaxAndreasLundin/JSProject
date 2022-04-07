import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import TopBar from "./TopBar";
import reportWebVitals from "./reportWebVitals";
import Button from "@mui/material/Button";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <TopBar />
    <h1>Welcome</h1>
    <App />
    <Button variant="contained">SPARA</Button>
    <Button variant="contained">SKAPA PROFIL</Button>
  </React.StrictMode>
);

reportWebVitals();
