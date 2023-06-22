import React from 'react';

export default function DrumPad(props) {

  function play() {
    const sample = document.getElementById(props.soundName);
    sample.volume = props.volume
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
