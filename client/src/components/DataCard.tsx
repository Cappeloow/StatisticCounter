import { useStatisticContext } from "../context/StatisticContext";
import { Card, Typography } from "antd";
import "../style/Card.css";
function DataCard(props: any) {
  const { matter, addAmountToMatter } = props;
  const { Title, Text } = Typography;
  const { copyNumber } = useStatisticContext();

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
