import {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import data from "../data.json";
import { useLocalStorage } from "../hooks/localstorage";
export interface IMatter {
  id: number;
  task: string;
  time: string[];
  amount: number;
  category: string;
}

export interface StatisticContext {
  matters: IMatter[];
  getStatistics: () => void;
  addAmountToMatter: (matter: IMatter) => void;
}

const StatisticContext = createContext<StatisticContext>({
  matters: [],
  getStatistics: () => {},
  addAmountToMatter: () => {},
});

export const useStatisticContext = () => useContext(StatisticContext);

const StatisticProvider = ({ children }: PropsWithChildren) => {
  const [matters, setMatters] = useLocalStorage("cart", []);

  const addAmountToMatter = (matter: IMatter) => {
    const currentItem = matters.find((item: IMatter) => item.id === matter.id);
    const currentDate = new Date();
    const options = { timeZone: "Europe/Stockholm" };
    const swedishTime = currentDate.toLocaleString("sv-SE", options);

    console.log(swedishTime);
    //kanske vill lägga specifika tider i arrayer?
    // för att sedan lägga in arrayer i en egen kub för att redovisa antalet i length?

    if (currentItem) {
      currentItem.amount++;
      currentItem.time.push(swedishTime);
      setMatters([...matters]);
    }
  };

  async function getStatistics() {
    setMatters(data);
  }

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <div>
      <StatisticContext.Provider
        value={{
          matters,
          getStatistics,
          addAmountToMatter,
        }}
      >
        {children}
      </StatisticContext.Provider>
    </div>
  );
};

export default StatisticProvider;
