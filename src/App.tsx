import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChristmasCard from "./components/ChristmasCard";
import LandingPage from "./components/LandingPage";
import { useState, useRef } from "react";

const App = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {!isClicked ? (
        <LandingPage onClick={() => setIsClicked(true)} />
      ) : (
        <div>
          <audio
            ref={audioRef}
            autoPlay
            loop
            onLoadedMetadata={() => {
              if (audioRef.current) {
                audioRef.current.volume = 0.7;
              }
            }}
          >
            <source src="src\assets\JingleBellRock_8bit.mp3" type="audio/mp3" />
          </audio>
          <ChristmasCard />
        </div>
      )}
    </>
  );
};

export default App;
