import React from "react";
import "./App.css";
import { SmartGame } from "./components/Game";
import Welcome from "./components/Welcome";
import names from "./names.json";

const App: React.FC = () => {
  React.useEffect(() => {
    setNameList(names);
  }, []);

  const [nameList, setNameList] = React.useState<string[]>([]);
  const [isStart, setIsStart] = React.useState(false);

  return (
    <div className="App">
      <Welcome isStart={isStart} start={() => setIsStart(true)} />
      <SmartGame nameList={nameList} isStart={isStart} />
    </div>
  );
};

export default App;
