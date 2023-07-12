import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useStatisticContext } from "../context/StatisticContext";

function DailyResultsCard() {
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

  return (
    <div>
      <div className="Eight">
        <p>09.00-12.00: {nine.length}</p>
        <p>08.00-09.00: {eight.length}</p>
        <p>12.00-13.00: {twelve.length}</p>
        <p>13.00-16.00: {thirteen.length}</p>
      </div>
      <Title level={4}>Totalt för dagen: {result}</Title>
    </div>
  );
}

export default DailyResultsCard;
