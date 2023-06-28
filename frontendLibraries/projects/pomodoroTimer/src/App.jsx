// https://aleksandarpopovic.com/Infinite-Pomodoro-App-in-React/
import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(0);
  const [breakTime, setBreakTime] = useState(5);
  const [message, setMessage] = useState(false);
  const [running, setRunning] = useState(false);
  // const [pause,setPause] = useState(false)
  function handleClick(e) {
    if (e.target.id === 'start_stop') {
      setRunning((prevVal) => !prevVal);
    }
    if (e.target.id === 'reset') {
      setBreakTime(5);
      setMins(25);
      setSecs(0);
      setRunning(false);
      setMessage(false);
    }
    if (!running && e.target.id === 'break-increment') {
      setBreakTime((time) => time + 1);
    }
    if (!running && e.target.id === 'break-decrement') {
      if (breakTime > 1) {
        setBreakTime((time) => time - 1);
      }
    }
    if (!running && e.target.id === 'session-increment') {
      setMins((time) => time + 1);
    }
    if (!running && e.target.id === 'session-decrement') {
      if (mins > 1) {
        setMins((time) => time - 1);
      }
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (running) {
        if (secs === 0) {
          if (mins !== 0) {
            setSecs(59);
            setMins((prevVal) => prevVal - 1);
            return;
          }
          setMessage((prevVal) => !prevVal);
          let breakCheck = message ? mins : breakTime;
          setMins(breakCheck);
          setSecs(0);
          return;
        }
        setSecs((prevVal) => prevVal - 1);
      }
    }, 1000);
  });

  const displayMins = mins < 10 ? `0${mins}` : mins;
  const displaySecs = secs < 10 ? `0${secs}` : secs;

  return (
    <main>
      <section>
        {message && <h1>Take a break!</h1>}
        <div id="timer-label">
          <p id="time-left">{`${displayMins}:${displaySecs}`}</p>
        </div>
        <div id="controls">
          <button
            id="start_stop"
            onClick={handleClick}
            style={
              running
                ? { backgroundColor: 'red' }
                : { backgroundColor: 'green' }
            }
          >
            Start/Stop
          </button>
          <button id="reset" onClick={handleClick} style={{backgroundColor: 'orangered'}}>
            Reset
          </button>
        </div>
      </section>
      {!running && (
        <section>
          <div id="break-label">
            <p>Break Time</p>
            <p id="break-length">{breakTime}</p>
            <button id="break-increment" onClick={handleClick}>
              Increase
            </button>
            <button id="break-decrement" onClick={handleClick}>
              Decrease
            </button>
          </div>
          <div id="session-label">
            <p>Session Time</p>
            <p id="session-length">{mins}</p>
            <button id="session-increment" onClick={handleClick}>
              Increase
            </button>
            <button id="session-decrement" onClick={handleClick}>
              Decrease
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
