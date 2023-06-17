import React from "react";
import { Routes, Route } from "react-router-dom";
import StatisticPanel from "../ReusableComponents/StatisticPanel";
import TotalSumDisplay from "../ReusableComponents/TotalSumDisplay";
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StatisticPanel />} />
        <Route path="/statistic" element={<TotalSumDisplay />} />
      </Routes>
    </main>
  );
}

export default Main;
