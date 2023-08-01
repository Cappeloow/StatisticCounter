import { useStatisticContext } from "../context/StatisticContext";
import { Card, Typography } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import "../style/Card.css";
function DataCard(props: any) {
  const { matter, addAmountToMatter } = props;
  const { Title, Text } = Typography;
  const { copyNumber } = useStatisticContext();

  const handleClicker = (e: any) => {
    e.stopPropagation();
    copyNumber(e);
  };
  return (
    <Card onClick={() => addAmountToMatter(matter)}>
      <div className="Card">
        <div className="containerOfMatter">
          <Title
            style={{ userSelect: "none" }}
            className="titleOfMatter"
            level={2}
          >
            {matter.task}
            <br></br>
            {matter.icon === "mail" ? (
              <MailOutlined style={{ fontSize: "24px" }} />
            ) : null}
            {matter.icon === "TM" ? (
              <>
                <MailOutlined style={{ fontSize: "24px" }} />

                <PhoneOutlined />
              </>
            ) : null}
          </Title>
        </div>
        <div
          onClick={(e) => handleClicker(e)}
          className="containerOfCardNumber"
        >
          <Text style={{ userSelect: "none" }} className="amountNumber">
            {matter.amount}
          </Text>
        </div>
      </div>
    </Card>
  );
}

export default DataCard;
