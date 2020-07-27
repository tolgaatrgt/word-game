import React from "react";
type Props = {
  duration: number;
  isCount: boolean;
  onFinish: () => void;
};
export const Countdown: React.FC<Props> = ({ duration, isCount, onFinish }) => {
  const [time, setTime] = React.useState(duration);
  const counter = setTimeout(() => isCount && setTime(time - 1), 1000);

  if (time === 0) {
    onFinish();
    clearTimeout(counter);
  }

  return (
    <span className="counter">
      {isCount ? "🕒 Remaining time: " + time + "sec" : null}
    </span>
  );
};
