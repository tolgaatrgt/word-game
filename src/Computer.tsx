import React, { Children } from "react";

type Props = {
  message: string;
};

export const Computer: React.FC<Props> = ({ message, children }) => {
  let msg = new SpeechSynthesisUtterance(message);
  msg.lang = "tr-TR";
  window.speechSynthesis.speak(msg);

  return <div>{children}</div>;
};
