import React from "react";
import { Card } from "antd";
function DataCard(props) {
  const { matter, addAmountToMatter } = props;
  return (
    <Card>
      <div>
        <h1 onClick={() => addAmountToMatter(matter)}>{matter.task}</h1>
        <p>{matter.amount}</p>
      </div>
    </Card>
  );
}

export default DataCard;
