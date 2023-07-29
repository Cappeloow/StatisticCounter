import { useStatisticContext } from "../context/StatisticContext";
import { Card, Typography } from "antd";
import "../style/Card.css";
function DataCard(props: any) {
  const { matter, addAmountToMatter } = props;
  const { Title, Text } = Typography;
  const { copyNumber } = useStatisticContext();

  const handleClicker = (e: any) => {
    e.preventDefault();
    copyNumber(e);
  };
  return (
    <Card onClick={() => addAmountToMatter(matter)}>
      <div className="Card">
        <Title
          style={{ userSelect: "none" }}
          className="titleAddNumber"
          level={2}
        >
          {matter.task}
        </Title>
        <div className="containerOfCardNumber">
          <Text
            style={{ userSelect: "none" }}
            className="amountNumber"
            onClick={(e) => handleClicker(e)}
          >
            {matter.amount}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default DataCard;
