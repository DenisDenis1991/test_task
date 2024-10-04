import { useState, useEffect, FC } from 'react';
import { timerFinished, $timerSeconds } from '../model';
import { useUnit } from 'effector-react';

interface TimerComponentProps {
  initialSeconds: number;
}

export const TimerComponent: FC<TimerComponentProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(() => {
    const savedTime = localStorage.getItem('timerSeconds');
    return savedTime ? Number(savedTime) : initialSeconds;
  });

  const resetTime = useUnit($timerSeconds);

  useEffect(() => {
    if (resetTime) {
      setSeconds(resetTime);
      localStorage.setItem('timerSeconds', String(resetTime));
    }
  }, [resetTime]);

  useEffect(() => {
    if (seconds === 0) {
      timerFinished();
      localStorage.removeItem('timerSeconds');
      return;
    }

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const newTime = prev - 1;
        localStorage.setItem('timerSeconds', String(newTime));
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return <div>Оставшееся время: {seconds} сек</div>;
};
