import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
