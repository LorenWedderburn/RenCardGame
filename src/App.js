import { useRef, useState } from "react";
import { Logo } from "./Logo";
import { GameMenu } from "./GameMenu";
import { Game } from "./Game";

export default function App() {
  const [playGame, setPlayGame] = useState(false);
  const [numOfCards, setNumOfCards] = useState("");
  //const bgMusicPlayer = new Audio("Audio/Backgroundmusic.mp3");
  const bgMusicPlayer = useRef();

  return (
    <>
      <audio
        src="Audio/Backgroundmusic.mp3"
        ref={bgMusicPlayer}
        loop={true}
      ></audio>

      {playGame === false ? (
        <div>
          <Logo>Loren's Memory Game</Logo>
          <GameMenu
            setPlayGame={setPlayGame}
            setNumOfCards={setNumOfCards}
            bgMusicPlayer={bgMusicPlayer}
          />
        </div>
      ) : (
        <div>
          {/* <Logo>Loren's Memory Game</Logo> */}
          <Game
            numOfCards={numOfCards}
            setPlayGame={setPlayGame}
            bgMusicPlayer={bgMusicPlayer}
          />
        </div>
      )}
    </>
  );
}
