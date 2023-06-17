import {
  PropsWithChildren,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import data from "../data.json";

export interface IMatter {
  id: number;
  task: string;
  category: string;
}

export interface StatisticContext {
  matters: IMatter[];
  getStatistics: () => void;
}

const StatisticContext = createContext<StatisticContext>({
  matters: [],
  getStatistics: () => {},
});

export const useStatisticContext = () => useContext(StatisticContext);

const StatisticProvider = ({ children }: PropsWithChildren) => {
  const [matters, setMatter] = useState<IMatter[]>([]);

  async function getStatistics() {
    setMatter(data);
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
        }}
      >
        {children}
      </StatisticContext.Provider>
    </div>
  );
};

export default StatisticProvider;
