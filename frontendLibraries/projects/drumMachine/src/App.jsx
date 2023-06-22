import './App.css';
import React from 'react';
import DrumPad from './components/drumPad';

function App() {
  const [volume, setVolume] = React.useState(0.5);
  // const [recording, setRecording] = React.useState('')
  const heaterKit = [
    {
      id: 'heater-1',
      key: 'q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      id: 'heater-2',
      key: 'w',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      id: 'heater-3',
      key: 'e',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      id: 'heater-4',
      key: 'a',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      id: 'clap',
      key: 's',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      id: 'open-hh',
      key: 'd',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      id: 'kick-n-hat',
      key: 'z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      id: 'kick',
      key: 'x',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      id: 'closed-hh',
      key: 'c',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  function handleChange(e) {
    setVolume(e.target.value);
  }

  const drumPad = heaterKit.map((sound, index) => (
    <DrumPad
      volume={volume}
      key={index}
      id={sound.key}
      soundName={sound.id}
      sound={sound.url}
      drumKey={sound.key}
    />
  ));

  return (
    <div id="drum-machine">
      {drumPad}
      <h4>Volume: {volume}</h4>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        onChange={handleChange}
        value={volume}
      />
    </div>
  );
}

export default App;
