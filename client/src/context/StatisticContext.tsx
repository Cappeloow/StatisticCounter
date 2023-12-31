import { PropsWithChildren, useEffect, createContext, useContext } from "react";
import data from "../data.json";
import { useLocalStorage } from "../hooks/localstorage";
export interface IMatter {
  id: number;
  task: string;
  time: number[];
  amount: number;
  category: string;
}

export interface StatisticContext {
  matters: IMatter[];
  getStatistics: () => void;
  addAmountToMatter: (matter: IMatter) => void;
  dailyResults: (matters: IMatter[]) => number;
  copyNumber: (e: any) => void;
}

const StatisticContext = createContext<StatisticContext>({
  matters: [],
  getStatistics: () => {},
  addAmountToMatter: () => {},
  dailyResults: () => 0,
  copyNumber: () => {},
});

export const useStatisticContext = () => useContext(StatisticContext);

const StatisticProvider = ({ children }: PropsWithChildren) => {
  const [matters, setMatters] = useLocalStorage("statistics", data);

  const addAmountToMatter = (matter: IMatter) => {
    const currentItem = matters.find((item: IMatter) => item.id === matter.id);
    const currentDate = new Date();
    const options = { timeZone: "Europe/Stockholm" };
    const swedishTime = currentDate.toLocaleTimeString("sv-SE", options);
    const timeParts = swedishTime.split(":");
    const hours = parseInt(timeParts[0]);

    //kanske vill lägga specifika tider i arrayer?
    // för att sedan lägga in arrayer i en egen kub för att redovisa antalet i length?

    if (currentItem) {
      currentItem.amount++;
      currentItem.time.push(hours);
      setMatters([...matters]);
    }
  };

  useEffect(() => {
    // This code will execute whenever the matters state changes
    console.log(matters);
  }, [matters]);

  async function getStatistics() {
    const storedMatters = localStorage.getItem("statistics");
    if (storedMatters) {
      setMatters(JSON.parse(storedMatters));
    } else {
      setMatters(data);
    }
  }

  useEffect(() => {
    getStatistics();
  }, []);

  const dailyResults = (matters: IMatter[]) => {
    const collectedAmount = matters.map((matter) => matter.amount);
    const sumWithInitial = collectedAmount.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sumWithInitial;
  };

  function copyNumber(e: any) {
    const textField = document.createElement("textarea");
    textField.value = e.target.textContent;

    document.body.appendChild(textField);

    textField.select();
    textField.setSelectionRange(0, 99999);

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

  return (
    <div>
      <StatisticContext.Provider
        value={{
          matters,
          getStatistics,
          addAmountToMatter,
          dailyResults,
          copyNumber,
        }}
      >
        {children}
      </StatisticContext.Provider>
    </div>
  );
};

export default StatisticProvider;
