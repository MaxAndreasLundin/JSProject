import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);

reportWebVitals();
