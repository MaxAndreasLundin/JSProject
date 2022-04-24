import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/Theme";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActivityCard from "./components/ActivityCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar></Navbar>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/activities" element={<ActivityCard />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
