import { useState } from "react";
import Footer from "./mainComponents/Footer";
import Header from "./mainComponents/Header";
import Main from "./mainComponents/Main";
import StatisticProvider from "./context/StatisticContext.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StatisticProvider>
        <Main />
      </StatisticProvider>
      <Footer />
    </>
  );
}

export default App;
