import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChristmasCard from "./components/ChristmasCard";
import LandingPage from "./components/LandingPage";
import { useState } from "react";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (submittedName: string) => {
    setName(submittedName);
    setIsClicked(true);
  };
  return (
    <>
      {!isClicked ? (
        <LandingPage onClick={handleSubmit} />
      ) : (
        <ChristmasCard name={name} />
      )}
    </>
  );
};

export default App;
