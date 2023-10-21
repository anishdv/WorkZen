import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [timer, setTimer] = useState(workMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      if (isBreak) {
        alert("Break time is over. Get back to work!");
        setTimer(workMinutes * 60);
      } else {
        alert("Work time is over. Take a break!");
        setSessionsCompleted(sessionsCompleted + 1);
        setTimer(breakMinutes * 60);
      }

      setIsBreak(!isBreak);
    }

    return () => clearInterval(interval);
  }, [isActive, timer, isBreak, workMinutes, breakMinutes, sessionsCompleted]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimer(workMinutes * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
  };

  return (
    <div className="bg-violet-00 p-4 shadow rounded-lg h-full flex justify-center items-center">
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Pomodoro Timer
          </h2>
          <p className="text-white">{isBreak ? "Break Time" : "Work Time"}</p>
          <div className="text-4xl font-bold mb-4 text-white">
            {formatTime(timer)}
          </div>
        </div>
        <div className="mb-4 ">
          <div className="flex justify-between my-2">
            <h2 className="text-white">Work Time (in minutes) : </h2>
            <input
              type="number"
              value={workMinutes}
              className="bg-gray-300 max-h-8"
              onChange={(e) => setWorkMinutes(parseInt(e.target.value))}
            />
          </div>
          <div className="flex justify-between">
            <h2 className="text-white">Break Time (in minutes) : </h2>
            <input
              type="number"
              value={breakMinutes}
              className="bg-gray-300 max-h-8"
              onChange={(e) => setBreakMinutes(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <button
            onClick={toggleTimer}
            className="bg-violet-500 hover:bg-violet-900  text-white p-2 mr-2 rounded"
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            onClick={resetTimer}
            className="bg-gray-400 hover:bg-gray-600 text-white p-2 rounded"
          >
            Reset
          </button>
        </div>
        <p className="mb-4 text-white text-center ">
          Sessions Completed: {sessionsCompleted}
        </p>
      </div>
    </div>
  );
};

export default Pomodoro;
