import React, { useEffect } from "react";
type Props = {
  duration: number;
  onFinish: () => void;
};
export const Countdown: React.FC<Props> = ({ duration, onFinish }) => {
  const [time, setTime] = React.useState(duration);
  const counter = setTimeout(() => setTime(time - 1), 1000);
  console.log("ÇALIŞTIM");
  if (time === 0) {
    onFinish();
    clearTimeout(counter);
  }

  return (
    <span className="counter">{"🕒 Remaining time: " + time + "sec"}</span>
  );
};

export default Countdown;
