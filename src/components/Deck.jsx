import React from "react";
import { connect } from "react-redux";
import { removeFromDeck } from "../actions/actions";

const Deck = (props) => {
  const totalCards = () => {
    let total = 0;
    props.deckData.map((card) => (total += Number(card.number)));
    return `${total} / 60`;
  };
  return (
    <div className="deck">
      <p className="totalCards">{props.deckData.length > 0 ? totalCards() : null}</p>
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
export default connect(mapStateToProps, { removeFromDeck })(Deck);
