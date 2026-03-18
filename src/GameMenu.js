import { Button } from "./Button";

export function GameMenu({ setPlayGame, setNumOfCards, bgMusicPlayer }) {
  const minCards = 4;
  const maxCards = 30;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements.deckSize.value);
    const value = Number(e.target.elements.deckSize.value);
    isANumber(value);
  }

  function isANumber(value) {
    if (isNaN(value)) {
      alert("Not a number");
    } else {
      isInRange(value);
    }
  }

  function isInRange(value) {
    if (value < minCards || value > maxCards) {
      alert("Number is outside of range");
    } else {
      isAnEvenNum(value);
    }
  }

  function isAnEvenNum(value) {
    if (value % 2 !== 0) {
      alert("Number is not even");
    } else {
      setNumOfCards(value);
      if (window.confirm("do you wish to proceed?")) {
        bgMusicPlayer.current.volume = 0.1;
        bgMusicPlayer.current.play();
        setPlayGame(true);
      } else {
        setPlayGame(false);
      }
    }
  }

  return (
    <div className="game-menu-container">
      <form className="game-menu" onSubmit={handleSubmit}>
        <h2>{`Please pick an even number of cards between ${minCards}-${maxCards}`}</h2>
        <div className="game-menu-input">
          <input
            type="text"
            placeholder="Please enter a number..."
            id="deckSize"
          ></input>
          <Button className="game-button">Submit</Button>
        </div>
      </form>
    </div>
  );
}
