import React from "react";

export const Human = () => {
  const [word, setWord] = React.useState("");
  const SpeechRecognition =
    window.SpeechRecognition || (window as any).webkitSpeechRecognition;
  const mic = new SpeechRecognition();
  mic.lang = "tr-TR";
  mic.start();
  mic.onresult = (e) => {
    mic.stop();
    setWord(e.results[0][0].transcript);
  };
  return word;
};
