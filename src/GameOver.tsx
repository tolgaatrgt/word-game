import React from "react";
import logo from "./img/game-over.png";
type Props = {
  isGameOver: boolean;
  score: number;
};

export const GameOver: React.FC<Props> = ({ isGameOver, score }) => {
  React.useEffect(() => {}, []);
  const [isVisible, setVisible] = React.useState(false);
  const playAgainButton = () => {
    setTimeout(() => {
      setVisible(true);
    }, 1500);
    return (
      isVisible && (
        <div className="game-over">
          <h1 style={{ color: "#5baf51" }}>
            {`Total number of known words: ${score}`}{" "}
          </h1>
        </div>
      )
    );
  };
  return (
    <div
      className="game-over-container"
      style={{
        display: `${isGameOver ? `block` : `none`}`,
      }}
    >
      <img src={logo} className="logo" />
      {playAgainButton()}
    </div>
  );
};

export default GameOver;
