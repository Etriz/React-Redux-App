import React from "react";
import { connect } from "react-redux";

const CardDisplay = (props) => {
  return (
    <div>
      {props.isFetchingData ? (
        <h3>Fetching Card Data...</h3>
      ) : props.cardData.length > 1 ? (
        <>
          <h3>{`${props.cardData.length} results found ...`}</h3>
          {props.cardData.map((card, index) => (
            <span key={index}>{card.name}, </span>
          ))}
        </>
      ) : props.cardData.length === 1 ? (
        <CardInfo card={props.cardData[0]} />
      ) : (
        <h3>{props.error}</h3>
      )}
    </div>
  );
};

const CardInfo = ({ card }) => {
  return (
    <div className="card">
      <h3>
        {card.name} {card.mana_cost}
      </h3>
      <p>{card.type_line}</p>
      <p>{card.oracle_text}</p>
      <button>Add to Deck</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
    cardData: state.cardData,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(CardDisplay);
