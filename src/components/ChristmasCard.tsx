import Snowfall from "react-snowfall";
import ChristmasTree from "./ChristmasTree";

const ChristmasCard = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 mt-5">
        <Snowfall />
        <h1 style={{ fontSize: "5rem" }}>Merry Christmas!</h1>
        <ChristmasTree />
      </div>
    </>
  );
};

export default ChristmasCard;
