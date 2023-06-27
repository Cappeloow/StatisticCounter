import React from "react";
import { Card, Typography } from "antd";
import "../style/Card.css";
function DataCard(props) {
  const { matter, addAmountToMatter } = props;
  const { Title, Text } = Typography;
  return (
    <Card>
      <div>
        <Title
          className="titleAddNumber"
          level={2}
          onClick={() => addAmountToMatter(matter)}
        >
          {matter.task}
        </Title>
        <Text>Antal ärende: {matter.amount} st </Text>
      </div>
    </Card>
  );
}

export default DataCard;
