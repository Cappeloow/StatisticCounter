import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useStatisticContext } from "../context/StatisticContext";
import TimeTable from "./timeTable";
function DailyResultsCard() {
  //state som sätter in antal interna och externa med?
  const { dailyResults, matters } = useStatisticContext();
  const { Title } = Typography;
  const result = dailyResults(matters);
  const [nine, setNine] = useState([]);
  const [eight, setEight] = useState([]);
  const [twelve, setTwelve] = useState([]);
  const [thirteen, setThirteen] = useState([]);

  function CalculateArrayOfTimes() {
    const allTimes = matters.flatMap((matter) => matter.time);
    const timesBetween9And12 = allTimes.filter(
      (time) => time >= 9 && time <= 12
    );
    const timesBetween13And16 = allTimes.filter(
      (time) => time >= 13 && time <= 16
    );
    const timesEqualTo8 = allTimes.filter((time) => time === 8);
    const timesEqualTo12 = allTimes.filter((time) => time === 12);
    setEight(timesEqualTo8);
    setNine(timesBetween9And12);
    setTwelve(timesEqualTo12);
    setThirteen(timesBetween13And16);
  }

  useEffect(() => {
    CalculateArrayOfTimes();
  }, [matters]);
  const resetStatistics = () => {
    localStorage.removeItem("statistics");
    window.location.reload();
  };
  return (
    <div>
      <TimeTable
        eight={eight.length}
        nine={nine.length}
        twelve={twelve.length}
        thirteen={thirteen.length}
        result={result}
      />
      <button onClick={resetStatistics}>Reset Statistics</button>
    </div>
  );
}

export default DailyResultsCard;
