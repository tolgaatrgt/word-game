import React from "react";
import Human from "./Human";
import Computer from "./Computer";
import Countdown from "./Countdown";
import Screen from "./Screen";
import GameOver from "./GameOver";
import Loader from "./Loader";
import {
  isRemember,
  isMatch,
  isContain,
  setInitial,
  increment
} from "../utils";

export type Turn = "Human" | "Computer";

type Props = {
  nameList: string[];
};

export const Game: React.FC<Props> = ({ nameList }) => {
  const initialAnswer = setInitial(nameList);
  const [isCount, setIsCount] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [computerWord, setComputerWord] = React.useState(initialAnswer);
  const [humanWord, setHumanWord] = React.useState("");
  const [turn, setTurn] = React.useState<Turn>("Human");
  const [answerList, setAnswerList] = React.useState<string[]>([]);
  const [usedAnswers, setUsedAnswers] = React.useState<string[]>([
    initialAnswer
  ]);
  const [isThink, setIsThink] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [result, setResult] = React.useState(false);

  React.useEffect(() => {
    const names = [...nameList];
    const answers: string[] = [];
    names.map(item => {
      item[0] === humanWord[humanWord.length - 1] && answers.push(item);
    });

    setAnswerList(answers);
  }, [humanWord]);

  React.useEffect(() => {
    if (turn === "Human") {
      if (!isContain(computerWord, usedAnswers)) {
        setIsCount(true);
        Human(w => {
          if (w) {
            setHumanWord(w);
            storeUp(w);
            setTurn("Computer");
            setComputerWord("");
          }
        });
      } else {
        setResult(true);
        setIsGameOver(true);
      }
    }

    if (turn === "Computer") {
      setIsCount(false);
      setIsThink(true);
      setTimeout(() => {
        if (
          isMatch(humanWord, computerWord) && // proper nouns cause inconsistency due to case sensitivity.
          !isContain(humanWord, usedAnswers) && // is answer used before ?
          isRemember(() => {
            increment(score, incremented => {
              // score updating also here if computer fails.
              setScore(incremented);
            });
            setResult(true);
          })
        ) {
          const answer =
            answerList[Math.floor(Math.random() * answerList.length)];
          setComputerWord(answer);
          setIsThink(false);
          setHumanWord("");
          increment(score, incremented => {
            setScore(incremented);
          });
          storeUp(answer);
          setTurn("Human");
        } else setIsGameOver(true);
      }, Math.floor(Math.random() * 2000 + 1000));
    }
  }, [turn]);

  const storeUp = (answer: string) => {
    let used = [...usedAnswers];
    used.push(answer);
    setUsedAnswers(used);
  };

  return isGameOver ? (
    <GameOver score={score} isGameOver={isGameOver} result={result} />
  ) : (
    <div style={{ display: `${isGameOver && `none`}` }}>
      <div className="counter-container">
        {isCount && (
          <Countdown duration={8} onFinish={() => setIsGameOver(true)} />
        )}
      </div>
      <Screen turn={turn} human={humanWord}>
        <Computer voice={computerWord}>
          {isThink ? <Loader /> : computerWord}
        </Computer>
      </Screen>
    </div>
  );
};

type SmartProps = Omit<Props, ""> & {
  isStart: boolean;
};

export const SmartGame: React.FC<SmartProps> = props => {
  const { isStart } = props;
  return isStart ? <Game {...props} /> : null;
};
