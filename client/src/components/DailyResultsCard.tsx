import React from "react";
import { Typography } from "antd";
import { useStatisticContext } from "../context/StatisticContext";
function DailyResultsCard() {
  const { dailyResults, matters } = useStatisticContext();
  const { Title, Text } = Typography;
  const result = dailyResults(matters);

  function CalculateArrayOfTimes(time: any) {
    const total = time.filter(
      (current: number) => current >= 20 && current <= 25
    );

    return total.length;
  }

  return (
    <div>
      {matters.map((matter) => (
        <div key={matter.id}>
          <p>{CalculateArrayOfTimes(matter.time)}</p>
        </div>
      ))}
      <Title level={4}>Totalt för dagen: {result}</Title>
    </div>
  );
}
export default DailyResultsCard;
