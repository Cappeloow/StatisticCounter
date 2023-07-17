import DailyResultsCard from "./DailyResultsCard";
import { useState, useEffect } from "react";
import { Typography } from "antd";
import "../style/Main.css";
import { useStatisticContext } from "../context/StatisticContext";
import DataCard from "./DataCard";
function StatisticPanel() {
  const { matters, addAmountToMatter } = useStatisticContext();

  const { Title } = Typography;

  const [day, setDay] = useState("");

  function getCurrentDay() {
    const day = new Date();
    const weekday = [
      "Söndag",
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
    ];
    const currentDay = weekday[day.getDay()];
    setDay(currentDay);
  }

  useEffect(() => {
    getCurrentDay();
  }, []);

  return (
    <div>
      <Title className="DayOfTheWeek" level={1}>
        {day}
      </Title>
      <Title level={3} className="externText">
        Extern
      </Title>
      {matters.map((matter) => (
        <div key={matter.id}>
          <div>
            {matter.category === "extern" ? (
              <>
                <DataCard
                  matter={matter}
                  addAmountToMatter={addAmountToMatter}
                />
              </>
            ) : null}
          </div>
        </div>
      ))}
      <Title level={3} className="internText">
        Intern
      </Title>
      {matters.map((matter) => (
        <div key={matter.id}>
          <div>
            {matter.category === "intern" ? (
              <>
                <DataCard
                  matter={matter}
                  addAmountToMatter={addAmountToMatter}
                />
              </>
            ) : null}
          </div>
        </div>
      ))}

      <DailyResultsCard />
    </div>
  );
}

export default StatisticPanel;

// import React from 'react';
// import { Space, Table, Tag } from 'antd';
// import type { ColumnsType } from 'antd/es/table';

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

// const columns: ColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

// const App: React.FC = () => <Table columns={columns} dataSource={data} />;

// export default App;
