import './App.css';
import React from 'react';

export default function App() {
  const [volume, setVolume] = React.useState(0.5);
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
    setVolume(parseFloat(e.target.value));
  }

  const samples = heaterKit.map((sounds) => {
    sounds.volume = volume;
    return sounds;
  });

  function DrumPad(props) {
    function play() {
      let volume = props.volume;
      const sample = document.getElementById(props.soundName);
      console.log(props);
      sample.volume = volume;
      sample.currentTime = 0;
      sample.play();
    }

    //   if key pressed is equal to an sample,
    // play the sample
    function handlePress(e) {
      if (e.key === props.id) {
        play();
      }
    }

    // need to add the event listener to the componenet
    React.useEffect(() => {
      document.addEventListener('keydown', handlePress);
      return () => document.removeEventListener('keydown', handlePress);
    }, []);
    return (
      <button id={props.id} onClick={play}>
        <audio
          id={props.soundName}
          className="clip"
          src={props.sound}
          type="audio/mpeg"
        ></audio>
        <p>{props.drumKey}</p>
      </button>
    );
  }

  const drumPad = samples.map((sound, index) => (
    <DrumPad
      volume={sound.volume}
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

