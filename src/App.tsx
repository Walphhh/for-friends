import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChristmasCard from "./components/ChristmasCard";
import LandingPage from "./components/LandingPage";
import { useState } from "react";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {!isClicked ? (
        <LandingPage onClick={() => setIsClicked(true)} />
      ) : (
        <ChristmasCard />
      )}
    </>
  );
};

export default App;
