import React from "react";
import { Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import "../style/Table.css";

interface DataType {
  key: string;
  name: string;
  externa: number;
  interna: string | number;
}

const { Text } = Typography;

interface TimeTableProps {
  eight: number;
  nine: number;
  twelve: number;
  thirteen: number;
  eightInt: number;
  nineInt: number;
  twelveInt: number;
  thirteenInt: number;
  result: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Tid",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Externa",
    dataIndex: "externa",
    key: "externa",
    render: (text) => <Text onClick={(e) => copyNumber(e)}>{text}</Text>,
  },
  {
    title: "Interna",
    dataIndex: "interna",
    key: "interna",
    render: (text) => <Text onClick={(e) => copyNumber(e)}>{text}</Text>,
  },
];

const TimeTable: React.FC<TimeTableProps> = (props) => {
  const {
    eight,
    nine,
    twelve,
    thirteen,
    result,
    eightInt,
    nineInt,
    twelveInt,
    thirteenInt,
  } = props;
  const data: DataType[] = [
    {
      key: "1",
      name: "08.00-09.00",
      externa: eight,
      interna: eightInt,
    },
    {
      key: "2",
      name: "09.00-12.00",
      externa: nine,
      interna: nineInt,
    },
    {
      key: "3",
      name: "12.00-13.00",
      externa: twelve,
      interna: twelveInt,
    },
    {
      key: "4",
      name: "13.00-16.00",
      externa: thirteen,
      interna: thirteenInt,
    },
    {
      key: "5",
      name: "Totalt för dagen",
      externa: result,
      interna: "", // You can set the "Interna" value for the last row here.
    },
  ];

  return (
    <Table style={{ userSelect: "none" }} columns={columns} dataSource={data} />
  );
};

export default TimeTable;

function copyNumber(e: any) {
  const textField = document.createElement("textarea");
  textField.value = e.target.textContent;

  document.body.appendChild(textField);

  textField.select();
  textField.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand("copy");
  document.body.removeChild(textField);

  const copiedTextElement = document.createElement("p");
  copiedTextElement.className = "textCopied";
  copiedTextElement.textContent = "Kopierat!";

  e.target.parentNode.appendChild(copiedTextElement);
  setTimeout(() => {
    e.target.parentNode.removeChild(copiedTextElement);
  }, 2000);
}
