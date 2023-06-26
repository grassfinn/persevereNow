import { useState, useEffect } from 'react';
import './App.css';
// https://aleksandarpopovic.com/Infinite-Pomodoro-App-in-React/
function App() {
  const [mins, setMins] = useState(25);
  const [secs, setSecs] = useState(0);
  const [message, setMessage] = useState(false);
  // const [pause,setPause] = useState(false)

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (secs === 0) {
        if (mins !== 0) {
          setSecs(59);
          setMins((prevVal) => prevVal - 1);
          return;
        }
        setMessage((prevVal) => !prevVal);
        let breakCheck = message ? 25 : 5;
        setMins(breakCheck);
        setSecs(0);
        return;
      }
      setSecs((prevVal) => prevVal - 1);
    }, 1000);
  });

  const displayMins = mins < 10 ? `0${mins}` : mins;
  const displaySecs = secs < 10 ? `0${secs}` : secs;

  return (
    <div>
      {message && <h1>Take a break!</h1>}
      {`${displayMins}:${displaySecs}`}
    </div>
  );
}

export default App;
