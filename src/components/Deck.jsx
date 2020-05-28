import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { removeFromDeck, clearAll } from "../actions/actions";

const Deck = (props) => {
  const [tooManyCards, setTooManyCards] = useState(false);
  const [showDeck, setShowDeck] = useState(true);
  const totalCards = () => {
    let total = 0;
    props.deckData.map((card) => (total += Number(card.number)));
    return total;
  };
  const toggleDeck = () => {
    setShowDeck(!showDeck);
  };
  useEffect(() => {
    const total = totalCards();
    total > 60 ? setTooManyCards(true) : setTooManyCards(false);
    //eslint-disable-next-line
  }, [props.deckData]);

  return (
    <div className="deck deckSlide">
      <button className="deckTab" onClick={toggleDeck}>
        {showDeck ? "Hide Deck" : "Show Deck"}
      </button>
      {props.deckData.length > 0 ? (
        <p className={tooManyCards ? "tooManyCards" : "totalCards"}>
          {totalCards()} / 60
          <button onClick={props.clearAll}>Clear All</button>
        </p>
      ) : null}
      {props.deckData.length > 0
        ? props.deckData.map((item, index) => (
            <span
              key={index}
              className="deckItem"
              onClick={() => {
                props.removeFromDeck(item);
              }}>{`${item.number}x ${item.name}`}</span>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deckData: state.deckData,
  };
};
export default connect(mapStateToProps, { removeFromDeck, clearAll })(Deck);
