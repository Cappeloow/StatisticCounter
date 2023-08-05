import React from "react";
import "../style/Boxes.css";
import { useStatisticContext } from "../context/StatisticContext";
function BoxesOfIntExtern() {
  const { matters, copyNumber } = useStatisticContext();
  const calculateIntern = () => {
    const filteredIntern = matters.filter((item) => item.category === "intern");

    const totalSumOfIntern = filteredIntern.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    return totalSumOfIntern;
  };

  const calculateExtern = () => {
    const filteredIntern = matters.filter((item) => item.category === "extern");

    const totalSumOfIntern = filteredIntern.reduce(
      (sum, item) => sum + item.amount,
      0
    );
    return totalSumOfIntern;
  };

  return (
    <div className="totalSumOfEach">
      <div>
        <h1>INTERNA</h1>
        <h3 onClick={(e) => copyNumber(e)}>{calculateIntern()}</h3>
      </div>
      <div>
        <h1>EXTERNA</h1>
        <h3 onClick={(e) => copyNumber(e)}>{calculateExtern()}</h3>
      </div>
    </div>
  );
}

export default BoxesOfIntExtern;
