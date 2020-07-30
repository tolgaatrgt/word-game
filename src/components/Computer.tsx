import React from "react";

type Props = {
  voice: string;
};

export const Computer: React.FC<Props> = ({ voice, children }) => {
  const msg = new SpeechSynthesisUtterance(voice);
  msg.lang = "tr-TR"; // not working properly(other common languages works well)
  React.useEffect(() => {
    window.speechSynthesis.speak(msg);
  }, [voice]);
  return <div>{children}</div>;
};

export default Computer;
