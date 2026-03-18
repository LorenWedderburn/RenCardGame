export function Card({ card, onSelectedCard, boardLock }) {
  return (
    <div className="card">
      <div
        className={card.flipped ? "card-inner-flipped" : "card-inner"}
        onClick={() => {
          if (boardLock || card.matched) return;
          onSelectedCard(card);
          //setLoaded(false);
        }}
      >
        <div className="card-back">
          <img src="/cards/Cardback.jpg" alt="Cardback" />
        </div>
        <div className="card-front">
          <img src={card.path} alt={card.name}></img>
        </div>
      </div>
    </div>
  );
}
