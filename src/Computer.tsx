import React from "react";

type Props = {
  voice: string;
};

export const Computer: React.FC<Props> = ({ voice, children }) => {
  let msg = new SpeechSynthesisUtterance(voice);
  msg.lang = "tr-TR";
  window.speechSynthesis.speak(msg);

  return <div>{children}</div>;
};
