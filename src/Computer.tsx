import React, { useEffect } from "react";

type Props = {
  voice: string;
};

export const Computer: React.FC<Props> = ({ voice, children }) => {
  const msg = new SpeechSynthesisUtterance(voice);
  msg.lang = "tr-TR";

  useEffect(() => {
    window.speechSynthesis.speak(msg);
  }, [voice]);

  return <div>{children}</div>;
};

export default Computer;
