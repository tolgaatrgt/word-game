import React from "react";

type Props = {
  isStart: boolean;
  start: () => void;
};

export const Welcome: React.FC<Props> = ({ isStart, start }) => {
  return (
    <div style={{ display: `${isStart ? `none` : `inline-block`}` }}>
      <span className="welcome">👾 Welcome to the 'Word Game' !</span>
      <button className="start-game-button" onClick={start}>
        START
      </button>
    </div>
  );
};

export default Welcome;
