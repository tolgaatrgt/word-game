import React from "react";
import "./App.css";
import { Turn } from "./Game";
type Props = {
  human: string;
  turn: Turn;
};

const Screen: React.FC<Props> = ({ human, children, turn }) => {
  return (
    <div className="game-container">
      <div className="card-container">
        <span className="title">YOU</span>
        <div className={turn === "Human" ? "card glow" : "card"}>{human}</div>
      </div>
      <div className="card-container">
        <span className="title">COMPUTER</span>
        <div className={turn === "Computer" ? "card glow" : "card"}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Screen;
