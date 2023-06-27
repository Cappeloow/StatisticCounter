import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useStatisticContext } from "../context/StatisticContext";

function DailyResultsCard() {
  const { dailyResults, matters } = useStatisticContext();
  const { Title } = Typography;
  const result = dailyResults(matters);
  const [ten, setTen] = useState([]);
  const [eight, setEight] = useState([]);

  function CalculateArrayOfTimes() {
    const allTimes = matters.flatMap((matter) => matter.time);
    const timesEqualTo22 = allTimes.filter((time) => time >= 22 && time <= 23);
    const timesEqualTo8 = allTimes.filter((time) => time === 8);
    setTen(timesEqualTo22);
    setEight(timesEqualTo8);
  }

  useEffect(() => {
    CalculateArrayOfTimes();
  }, [matters]);

  return (
    <div>
      <div className="Eight">
        <p> 22.00-23.00: {ten.length}</p>
        <p>8.00-9.00: {eight.length}</p>
      </div>
      <Title level={4}>Totalt för dagen: {result}</Title>
    </div>
  );
}

export default DailyResultsCard;
