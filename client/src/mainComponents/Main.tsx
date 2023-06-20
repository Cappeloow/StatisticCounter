import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Typography } from "antd";
import "../style/Main.css";
import LandingPage from "../pages/LandingPage";
import ResultPage from "../pages/ResultPage";
import Adminstration from "../pages/Adminstration";
function Main() {
  const { Title } = Typography;

  const [day, setDay] = useState("");

  function getCurrentDay() {
    const day = new Date();
    const weekday = [
      "Söndag",
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
    ];
    const currentDay = weekday[day.getDay()];
    setDay(currentDay);
  }

  useEffect(() => {
    getCurrentDay();
  }, []);

  return (
    <main>
      <Title className="DayOfTheWeek" level={1}>
        {day}
      </Title>
      <Routes>
        <Route path="/admin" element={<Adminstration />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </main>
  );
}

export default Main;
