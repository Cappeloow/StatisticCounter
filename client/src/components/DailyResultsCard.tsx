import React from "react";
import { Typography } from "antd";
import { useStatisticContext } from "../context/StatisticContext";
function DailyResultsCard() {
  const { dailyResults, matters } = useStatisticContext();
  const { Title } = Typography;
  const result = dailyResults(matters);

  return (
    <div>
      <Title level={4}>Totalt för dagen: {result}</Title>
    </div>
  );
}

export default DailyResultsCard;
