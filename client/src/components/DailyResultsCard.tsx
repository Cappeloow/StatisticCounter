import { useEffect, useState } from "react";
import { useStatisticContext } from "../context/StatisticContext";
import TimeTable from "./TimeTable";
import { Button } from "antd";
function DailyResultsCard() {
  //state som sätter in antal interna och externa med?
  const { dailyResults, matters } = useStatisticContext();

  const result = dailyResults(matters);
  const [nine, setNine] = useState<number[]>([]);
  const [eight, setEight] = useState<number[]>([]);
  const [twelve, setTwelve] = useState<number[]>([]);
  const [thirteen, setThirteen] = useState<number[]>([]);

  const [eightInt, setEightInt] = useState<number[]>([]);
  const [nineInt, setNineInt] = useState<number[]>([]);
  const [twelveInt, setTwelveInt] = useState<number[]>([]);
  const [thirteenInt, setThirteenInt] = useState<number[]>([]);

  function CalculateExternLength() {
    const externTimes = matters.filter(
      (matter) => matter.category === "extern"
    );
    const allTimes = externTimes.flatMap((matter) => matter.time);
    const timesBetween9And12 = allTimes.filter(
      (time) => time >= 9 && time < 12
    );
    const timesBetween13And16 = allTimes.filter(
      (time) => time >= 13 && time <= 16
    );
    const timesEqualTo8 = allTimes.filter((time) => time === 8);
    const timesEqualTo12 = allTimes.filter((time) => time === 12);
    setEight(timesEqualTo8);
    setNine(timesBetween9And12);
    setTwelve(timesEqualTo12);
    setThirteen(timesBetween13And16);
  }

  function CalculateInternLength() {
    const internTimes = matters.filter(
      (matter) => matter.category === "intern"
    );
    const allTimes = internTimes.flatMap((matter) => matter.time);
    const timesBetween9And12 = allTimes.filter(
      (time) => time >= 9 && time < 12
    );
    const timesBetween13And16 = allTimes.filter(
      (time) => time >= 13 && time <= 16
    );
    const timesEqualTo8 = allTimes.filter((time) => time === 8);
    const timesEqualTo12 = allTimes.filter((time) => time === 12);
    setEightInt(timesEqualTo8);
    setNineInt(timesBetween9And12);
    setTwelveInt(timesEqualTo12);
    setThirteenInt(timesBetween13And16);
  }

  useEffect(() => {
    CalculateInternLength();
    CalculateExternLength();
  }, [matters]);
  const resetStatistics = () => {
    localStorage.removeItem("statistics");
    window.location.reload();
  };
  return (
    <div>
      <TimeTable
        eight={eight.length}
        nine={nine.length}
        twelve={twelve.length}
        thirteen={thirteen.length}
        eightInt={eightInt.length}
        nineInt={nineInt.length}
        twelveInt={twelveInt.length}
        thirteenInt={thirteenInt.length}
        result={result}
      />
      <button className="resetButton" onClick={resetStatistics}>
        Reset
      </button>
    </div>
  );
}

export default DailyResultsCard;
