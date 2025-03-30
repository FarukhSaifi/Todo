import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-xl font-semibold">Stopwatch</h2>
      <div className="text-3xl font-mono">{formatTime(time)}</div>
      <div className="flex gap-2">
        {!isRunning ? (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => setIsRunning(true)}
          >
            Start
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
            onClick={() => setIsRunning(false)}
          >
            Pause
          </button>
        )}
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
