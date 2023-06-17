import { useState } from "react";
import Footer from "./mainComponents/Footer";
import Header from "./mainComponents/Header";
import Main from "./mainComponents/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
