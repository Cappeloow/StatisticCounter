import DailyResultsCard from "./DailyResultsCard";
import { useState, useEffect } from "react";
import { Typography } from "antd";
import "../style/Main.css";
import { useStatisticContext } from "../context/StatisticContext";
import DataCard from "./DataCard";
import BoxesOfIntExtern from "./BoxesOfIntExtern";
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
      <Title style={{ userSelect: "none" }} level={3} className="externText">
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
      <Title style={{ userSelect: "none" }} level={3} className="internText">
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
      <BoxesOfIntExtern />
      <div className="tidTabelText">
        <Title style={{ userSelect: "none" }} level={1}>
          TIDTABELLEN
        </Title>
      </div>
      <DailyResultsCard />
    </div>
  );
}

export default StatisticPanel;
