import React from "react";
import { Human } from "./Human";
import { Countdown } from "./Countdown";
import { Computer } from "./Computer";
import { GameOver } from "./GameOver";
import Screen from "./Screen";

type Props = {
  nameList: string[];
};

export const Game: React.FC<Props> = ({ nameList }) => {
  React.useEffect(() => {}, []);
  const [isCount, setIsCount] = React.useState(true);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [computerWord, setComputerWord] = React.useState("");
  const [humanWord, setHumanWord] = React.useState("");
  const [turn, setTurn] = React.useState("human"); // tip tanimla.......
  const answerOptions: string[] = [];
  const getAnswer = () => {
    return answerOptions[Math.floor(Math.random() * answerOptions.length)];
  };
  let score = 0;

  if (turn === "human") {
    Human();
  }

  if (turn === "computer" && humanWord !== "") {
    humanWord[0] === computerWord[computerWord.length - 1]
      ? nameList.map((item) => {
          item[0] === humanWord[humanWord.length - 1] &&
            answerOptions.push(item);
          getAnswer();
          score++;
          setTurn("human");
        })
      : setIsGameOver(true);
  }

  return isGameOver ? (
    <GameOver score={score} isGameOver={isGameOver} />
  ) : (
    <div style={{ display: `${isGameOver && `none`}` }}>
      <Countdown
        duration={3454352}
        isCount={isCount}
        onFinish={() => setIsGameOver(true)}
      />
      <Screen human={humanWord}>
        <Computer message={computerWord}>{getAnswer()}</Computer>
      </Screen>
    </div>
  );
};

type SmartProps = Omit<Props, ""> & {
  isStart: boolean;
};

export const SmartGame: React.FC<SmartProps> = (props) => {
  const { isStart } = props;
  return isStart ? <Game {...props} /> : null;
};
