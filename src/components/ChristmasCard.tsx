import Snowfall from "react-snowfall";
import ChristmasTree from "./ChristmasTree";
import audioFile from "../assets/JBRock_8bit.mp3";
import { useRef } from "react";

const ChristmasCard = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 mt-5">
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
          <source src={audioFile} type="audio/mp3" />
        </audio>
        <Snowfall />
        <h1 style={{ fontSize: "5rem" }}>Merry Christmas!</h1>
        <h3>- from your lovely boyfriend ralpie :3</h3>
        <ChristmasTree />
      </div>
    </>
  );
};

export default ChristmasCard;
