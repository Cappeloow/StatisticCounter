import Footer from "./mainComponents/Footer";
import Main from "./mainComponents/Main";
import StatisticProvider from "./context/StatisticContext.tsx";
import "./style/CustomCursor.css";
function App() {
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
