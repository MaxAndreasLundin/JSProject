import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ActivityCard from "./components/ActivityCard";

function App() {
  return (
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
  );
}
export default App;
