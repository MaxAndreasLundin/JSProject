import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Button from "@mui/material/Button";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Button variant="contained">SPARA</Button>
    <Button variant="contained">SKAPA PROFIL</Button>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
