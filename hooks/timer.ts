import { useEffect, useRef, useState } from "react";

export const useTimer = (countdown: number) => {
  const [timer, setTimer] = useState(countdown);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const intervalRef = useRef<number>(undefined);

  useEffect(() => {
    if (!isTimerRunning) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          setIsTimerRunning(false);
          return countdown;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [countdown, isTimerRunning]);

  return { timer, isTimerRunning, startTimer: () => setIsTimerRunning(true) };
};
