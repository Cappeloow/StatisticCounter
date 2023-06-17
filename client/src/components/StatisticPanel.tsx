import React from "react";
import { useStatisticContext } from "../context/StatisticContext";
function StatisticPanel() {
  const { matters } = useStatisticContext();

  return (
    <div>
      {matters.map((matter) => (
        <div key={matter.id}>
          <h1>{matter.task}</h1>
        </div>
      ))}
    </div>
  );
}

export default StatisticPanel;
