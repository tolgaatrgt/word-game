import React from "react";
import logo from "../img/game-over.png";
type Props = {
  isGameOver: boolean;
  score: number;
  result?: boolean;
};

export const GameOver: React.FC<Props> = ({ isGameOver, score, result }) => {
  React.useEffect(() => {}, []);
  const [isVisible, setVisible] = React.useState(false);

  const resultText = result ? "YOU WIN 🥳" : "YOU LOST 😥";
  const scoreInfo = () => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
    return (
      isVisible && (
        <div className="game-over">
          <span className="result">{resultText}</span>
          <h1 className="score">{`Total number of known words: ${score}`} </h1>
        </div>
      )
    );
  };
  return (
    <div
      style={{
        display: `${isGameOver ? `block` : `none`}`
      }}
    >
      <img src={logo} className="logo" />
      {scoreInfo()}
    </div>
  );
};

export default GameOver;
