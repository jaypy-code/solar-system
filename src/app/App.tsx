import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Solar from './components/solar/Solar';
import Player from './components/player/Player';
import { planets } from './database/plants';

function App() {
  let audio: HTMLAudioElement;
  const [index, setIndex] = useState(0);

  function initAudio() {
    let name = planets[index].name;
    audio = new Audio(`/audio/${name}.mp3`);
    initAudioEvents();
  }

  function initAudioEvents() {
    let player = document.getElementById('player');

    audio.onplay = () => {
      player?.classList.add('play');
    }

    audio.onpause = () => {
      player?.classList.remove('play');
    }
  }

  function onIndexChange(value: number) {
    setIndex(value);
    audio?.pause();
    initAudio();
  }

  function toggleAudio() {
    if (!audio) initAudio();
    !audio.paused ? audio.pause() : audio.play();
  }

  return (
    <main>
      <Solar indexChange={onIndexChange} />
      <Content index={index} />
      <Player toggle={() => toggleAudio()} />
    </main>
  );
}

export default App;
