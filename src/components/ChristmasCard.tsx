import Snowfall from "react-snowfall";
import audioFile from "../assets/Song.mp3";
import { useRef } from "react";
import ChristmasCat_1 from "../assets/christmas_cat_1.gif";
import ChristmasCat_2 from "../assets/christmas_cat_2.gif";
import ChristmasCat_3 from "../assets/christmas_cat_3.gif";
import ChristmasCat_4 from "../assets/christmas_cat_4.gif";
import ChristmasCat_5 from "../assets/christmas_cat_5.gif";

interface Props {
  name: string;
}

const ChristmasCard = ({ name }: Props) => {
  const pickRandomCat = () => {
    const cats = [
      ChristmasCat_1,
      ChristmasCat_2,
      ChristmasCat_3,
      ChristmasCat_4,
      ChristmasCat_5,
    ];
    const randomIndex = Math.floor(Math.random() * cats.length);
    return cats[randomIndex];
  };

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
              audioRef.current.volume = 0.3;
            }
          }}
        >
          <source src={audioFile} type="audio/mp3" />
        </audio>
        <Snowfall />
        <h1 style={{ fontSize: "5rem" }}>Merry Christmas {name}!</h1>
        <h3>Here's a Christmas Cat :3</h3>
        <p>- Love Ralph &hearts;</p>
        <div>
          <img src={pickRandomCat()} alt="Christmas Cat" />
        </div>
      </div>
    </>
  );
};

export default ChristmasCard;
