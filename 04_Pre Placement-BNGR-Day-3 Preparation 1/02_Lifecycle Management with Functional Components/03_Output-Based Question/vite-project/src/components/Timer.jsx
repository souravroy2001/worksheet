import React, { useState, useEffect } from "react";

/**
 * Timer component demonstrates the use of `useState` for state management
 * and `useEffect` for lifecycle events like mounting and cleanup.
 */
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);

  let timerID;

  useEffect(() => {
    if (start) {
      timerID = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    if (reset) {
      setSeconds(0);
      clearInterval(timerID);
    }

    // Cleanup function to clear the timer on unmount
    return () => clearInterval(timerID);
  }, [handelStart, handelReset]);

  function handelStart() {
    setStart(!start);
    setReset(false)
  }
  function handelReset() {
    setReset(!reset);
    setStart(false);
  }

  return (
    <>
      <div>Elapsed Time: {seconds} seconds</div> <br />
      <button onClick={handelStart}>{start ? "Stop" : "Start"}</button>{" "}
      &nbsp;&nbsp;
      <button onClick={handelReset}>Reset</button>&nbsp;&nbsp;
    </>
  );
}

export default Timer;
