import React from "react";
import { Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import "../style/Table.css";
interface DataType {
  key: string;
  name: string;
  age: number;
}

const { Text } = Typography;

interface TimeTableProps {
  eight: number;
  nine: number;
  twelve: number;
  thirteen: number;
  result: number;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Tid",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Antal",
    dataIndex: "age",
    key: "age",
    render: (text) => <Text onClick={(e) => copyNumber(e)}>{text}</Text>,
  },
];

const TimeTable: React.FC<TimeTableProps> = (props) => {
  const { eight, nine, twelve, thirteen, result } = props;
  const data: DataType[] = [
    {
      key: "1",
      name: "08.00-09.00",
      age: eight,
    },
    {
      key: "2",
      name: "09.00-12.00",
      age: nine,
    },
    {
      key: "3",
      name: "12.00-13.00",
      age: twelve,
    },
    {
      key: "4",
      name: "13.00-16.00",
      age: thirteen,
    },
    {
      key: "5",
      name: "Totalt för dagen",
      age: result,
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
