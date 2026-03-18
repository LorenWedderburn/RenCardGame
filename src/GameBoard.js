import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
// import { Logo } from "./Logo";

export function GameBoard({ deck, setScore, setPlayGame, bgMusicPlayer }) {
  const [gameDeck, setGameDeck] = useState(deck);
  const [_loaded, setLoaded] = useState(false);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [boardLock, setBoardLock] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  useEffect(() => {
    let sfxPlayer = new Audio("Audio/Rend.mp3");

    function flipCardsBack() {
      setGameDeck((prevDeck) => {
        return prevDeck.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, flipped: false };
          } else {
            return card;
          }
        });
      });
      setBoardLock(false);
      nextTurn();
    }

    function matchCards() {
      setGameDeck((prevDeck) => {
        return prevDeck.map((card) => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      playCardCry(firstCard);
      nextTurn();
    }

    function nextTurn() {
      setFirstCard(null);
      setSecondCard(null);
      setScore((prevScore) => prevScore + 1);
    }

    function playCardCry(card) {
      sfxPlayer.src = card.cry;
      sfxPlayer.play();
    }

    if (firstCard && secondCard) {
      if (firstCard.name === secondCard.name) {
        matchCards();
      } else {
        setBoardLock(true);
        setTimeout(() => flipCardsBack(), 1250);
      }
    }
  }, [firstCard, secondCard, setScore]);

  function checkCards(pickedCard) {
    //if (firstCard.id === pickedCard.id) return;
    if (firstCard === null) {
      setFirstCard(pickedCard);
    } else if (firstCard.id === pickedCard.id) {
      return;
    } else {
      setSecondCard(pickedCard);
    }
  }

  function onSelectedCard(pickedCard) {
    checkCards(pickedCard);
    const updatedDeck = gameDeck.map((card) => {
      if (pickedCard.id !== card.id) {
        return card;
      } else {
        return {
          ...card,
          flipped: true,
        };
      }
    });
    setGameDeck(updatedDeck);
  }

  function handleReset() {
    setFirstCard(null);
    setSecondCard(null);
    setBoardLock(false);
    setGameDeck(null);
    setScore(0);
    bgMusicPlayer.current.pause();
    bgMusicPlayer.current.currentTime = 0;
    setPlayGame(false);
  }

  return (
    <>
      <div className="game-board-container">
        <h2 className="sub-title">Time to play the game</h2>
        <Button className="game-button" onClick={handleReset}>
          New Game
        </Button>
        <div id="game-board">
          {gameDeck.map((card) => (
            <Card
              card={card}
              key={card.id}
              setLoaded={setLoaded}
              onSelectedCard={onSelectedCard}
              boardLock={boardLock}
            />
          ))}
        </div>
      </div>
    </>
  );
}
