import React from "react";
import "./App.css";

type Props = {
  human: string;
};

const Game: React.FC<Props> = ({ human, children }) => {
  return (
    <div className="game-container">
      <div className="card-container">
        <span className="title">YOU</span>
        <div className="card">{human}</div>
      </div>
      <div className="card-container">
        <span className="title">COMPUTER</span>
        <div className="card">{children}</div>
      </div>
    </div>
  );
};

export default Game;
