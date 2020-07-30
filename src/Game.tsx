import React, { useEffect } from "react";
import Human from "./Human";
import Computer from "./Computer";
import Countdown from "./Countdown";
import Screen from "./Screen";
import GameOver from "./GameOver";

type Props = {
  nameList: string[];
};

export type Turn = "Human" | "Computer";

export const Game: React.FC<Props> = ({ nameList }) => {
  const initialAnswer = nameList[Math.floor(Math.random() * nameList.length)];
  const [isCount, setIsCount] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [computerWord, setComputerWord] = React.useState(initialAnswer);
  const [humanWord, setHumanWord] = React.useState("");
  const [turn, setTurn] = React.useState<Turn>("Human");
  const [answerList, setAnswerList] = React.useState<string[]>([]);
  const [score, setScore] = React.useState(0);

  useEffect(() => {
    const names = [...nameList];
    const answers: string[] = [];
    names.map((item) => {
      item[0] === humanWord[humanWord.length - 1] && answers.push(item);
    });

    setAnswerList(answers);
  }, [humanWord]);

  useEffect(() => {
    if (turn === "Human") {
      setIsCount(true);
      Human((w) => {
        if (w) {
          setHumanWord(w);
          setTurn("Computer");
          setComputerWord("");
        }
      });
    }

    if (turn === "Computer") {
      setIsCount(false);
      setTimeout(() => {
        if (
          humanWord.toLowerCase()[0] === computerWord[computerWord.length - 1] // Proper nouns cause inconsistency due to case sensitivity.
        ) {
          let answer =
            answerList[Math.floor(Math.random() * answerList.length)];

          setComputerWord(answer);
          setHumanWord("");
          let currentScore = score;
          currentScore++;
          setScore(currentScore);

          setTurn("Human");
        } else setIsGameOver(true);
      }, Math.floor(Math.random() * 2000 + 1000));
    }
  }, [turn]);

  const getAnswer = () => {
    const random = 0.3;

    if (Math.random() > random)
      return answerList[Math.floor(Math.random() * answerList.length)];
    else alert("you win");
  };

  return isGameOver ? (
    <GameOver score={score} isGameOver={isGameOver} />
  ) : (
    <div style={{ display: `${isGameOver && `none`}` }}>
      <div className="counter-container">
        {isCount && (
          <Countdown duration={88986} onFinish={() => setIsGameOver(true)} />
        )}
      </div>
      <Screen turn={turn} human={humanWord}>
        <Computer voice={computerWord}>{computerWord}</Computer>
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
