import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import ConnectData from "./components/ConnectData/ConnectData";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Body />} />
          <Route path="/ConnectData" element={<ConnectData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
