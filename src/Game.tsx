import React, { useEffect } from "react";
import { Human } from "./Human";
import { Countdown } from "./Countdown";
import { Computer } from "./Computer";
import { GameOver } from "./GameOver";
import Screen from "./Screen";

type Props = {
  nameList: string[];
};

export const Game: React.FC<Props> = ({ nameList }) => {
  const initialAnswer = nameList[Math.floor(Math.random() * nameList.length)];
  React.useEffect(() => {}, []);
  const [isCount, setIsCount] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [computerWord, setComputerWord] = React.useState(initialAnswer);
  const [humanWord, setHumanWord] = React.useState("");
  const [turn, setTurn] = React.useState("human");
  const [answerList, setAnswerList] = React.useState<string[]>([]);
  const [score, setScore] = React.useState(0);

  const getAnswer = (word: string) => {
    let names = [...nameList];
    names.map((item) => {
      item[0] === humanWord[humanWord.length - 1] && names.push(item);
      setAnswerList(names);
    });

    const answer = answerList[Math.floor(Math.random() * answerList.length)];
    return answer;
  };

  const switchTimer = () => setIsCount(!isCount);

  const useTurn = (turn: string) => {
    let currentScore = score;
    console.log("BURAYA GELİYOR");
    useEffect(() => {
      console.log("BURAYA DA GELİYOR");

      function switchTurn() {
        // buradan sonrası çalıştırılmıyor
        switchTimer();
        if (turn === "human") {
          console.log("sadasf");
          let kelime = Human(); //  doğal olarak ses kaydı da başlamıyor(normalde sorunsuz çalışıyor)
          setHumanWord(kelime);
          setTurn("computer");
        }

        if (turn === "computer") {
          switchTimer();
          // setIsCount(false)
          // humanWord[0] === computerWord[computerWord.length - 1]
          //   ?
          // currentScore ++
          // setScore(currentScore)
          // let cevap = getAnswer(humanWord);
          // setComputerWord(cevap)
          // setTurn('human')
          //   : setIsGameOver(true);
        }
      }
    }, [turn]);
  };

  useTurn(turn);

  return isGameOver ? (
    <GameOver score={score} isGameOver={isGameOver} />
  ) : (
    <div style={{ display: `${isGameOver && `none`}` }}>
      <Countdown
        duration={8}
        isCount={isCount}
        onFinish={() => setIsGameOver(true)}
      />
      <Screen human={humanWord}>
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
