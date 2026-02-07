"use client";

import { useState, useEffect, useMemo } from "react";
import cls from "./styles.module.scss";

export const SliderItemTimer = () => {
  const initialSeconds = useMemo(
    () => Math.floor(Math.random() * 3600) + 60,
    []
  );
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;

  return (
    <div className={cls.container}>
      <p className={cls.number}>{h}h</p>
      <p className={cls.number}>{String(m).padStart(2, "0")}m</p>
      <p className={cls.number}>{String(s).padStart(2, "0")}s</p>
    </div>
  );
};
