import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ResultPage from "../pages/ResultPage";
import Adminstration from "../pages/Adminstration";
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/admin" element={<Adminstration />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </main>
  );
}

export default Main;
