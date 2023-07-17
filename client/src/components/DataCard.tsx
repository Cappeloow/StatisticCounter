import React from "react";
import { Card, Typography } from "antd";
import "../style/Card.css";
function DataCard(props) {
  const { matter, addAmountToMatter } = props;
  const { Title, Text } = Typography;

  function copyNumber(e) {
    const textField = document.createElement("textarea");
    textField.value = e.target.textContent;

    document.body.appendChild(textField);

    textField.select();
    textField.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");
    document.body.removeChild(textField);

    const copiedTextElement = document.createElement("p");
    copiedTextElement.className = "textCopied";
    copiedTextElement.textContent = "Copied";

    e.target.parentNode.appendChild(copiedTextElement);
    setTimeout(() => {
      e.target.parentNode.removeChild(copiedTextElement);
    }, 2000);

    return console.log("Copied", textField.value);
  }
  return (
    <Card>
      <div className="Card">
        <Title
          className="titleAddNumber"
          level={2}
          onClick={() => addAmountToMatter(matter)}
        >
          {matter.task}
        </Title>
        <div className="containerOfCardNumber">
          <Text className="amountNumber" onClick={(e) => copyNumber(e)}>
            {matter.amount}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default DataCard;
