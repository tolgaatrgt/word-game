import React from "react";
import "./App.css";
import { SmartGame } from "./Game";
import names from "./names.json";

const App: React.FC = () => {
  React.useEffect(() => {
    setNameList(names);
  }, []);

  const [nameList, setNameList] = React.useState<string[]>([]);
  const [isStart, setIsStart] = React.useState(false);

  return (
    <div className="App">
      <div style={{ display: `${isStart ? `none` : `inline-block`}` }}>
        <h1>👾 Welcome to the 'Word Game' !</h1>
        <button className="start-game-button" onClick={() => setIsStart(true)}>
          START
        </button>
      </div>
      <SmartGame nameList={nameList} isStart={isStart} />
    </div>
  );
};

export default App;
