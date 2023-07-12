import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
}

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
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Antal",
    dataIndex: "age",
    key: "age",
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
      name: "totalt för dagen",
      age: result,
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TimeTable;
