"use client";

import { useState, useEffect } from "react";

interface TimerProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  color?: string;
}

export function Timer({
  days = 3,
  hours = 23,
  minutes = 19,
  seconds = 56,
  color = "black"
}: TimerProps) {
  const [time, setTime] = useState({
    days: days ?? 0,
    hours: hours ?? 0,
    minutes: minutes ?? 0,
    seconds: seconds ?? 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        if (newDays < 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number | undefined) => {
    const numValue = value ?? 0;
    return numValue.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-end gap-2" style={{ color }}>
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-500">Days</span>
        <span className="lg:text-2xl font-bold">{formatTime(time.days)}</span>
      </div>
      <span className="text-2xl font-bold text-[#DB4444] mb-1">:</span>
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-500">Hours</span>
        <span className="lg:text-2xl font-bold">{formatTime(time.hours)}</span>
      </div>
      <span className="text-2xl font-bold text-[#DB4444] mb-1">:</span>
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-500">Minutes</span>
        <span className="lg:text-2xl font-bold">{formatTime(time.minutes)}</span>
      </div>
      <span className="text-2xl font-bold text-[#DB4444] mb-1">:</span>
      <div className="flex flex-col items-start">
        <span className="text-xs text-gray-500">Seconds</span>
        <span className="lg:text-2xl font-bold">{formatTime(time.seconds)}</span>
      </div>
    </div>
  );
}
