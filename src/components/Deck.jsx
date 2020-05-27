import React from "react";
import { connect } from "react-redux";

const Deck = (props) => {
  return (
    <div className="deck">
      {props.deckData.length > 0
        ? props.deckData.map((item) => (
            <span className="deckItem">{`${item.number}x ${item.name}`}</span>
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
export default connect(mapStateToProps, {})(Deck);
