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
  const handlePropgation = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div className="CardContainer" onClick={() => addAmountToMatter(matter)}>
      <div className="Card">
        <div className="containerOfMatter">
          <Title
            style={{ userSelect: "none" }}
            className="titleOfMatter"
            level={3}
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
          onClick={(e) => handlePropgation(e)}
          className="containerOfCardNumber"
        >
          <Text
            onClick={(e) => handleClicker(e)}
            style={{ userSelect: "none" }}
            className="amountNumber"
          >
            {matter.amount}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
