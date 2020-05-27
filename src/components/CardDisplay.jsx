import React, { useState } from "react";
import { connect } from "react-redux";
import { getData, addToDeck } from "../actions/actions";

const CardDisplay = (props) => {
  const handleClick = (name) => {
    props.getData(name);
  };

  return (
    <div>
      {props.isFetchingData ? (
        <h3>Fetching Card Data...</h3>
      ) : props.cardData.length > 1 ? (
        <div className="searchList">
          <h3>{`${props.cardData.length} results found ...`}</h3>
          {props.cardData.map((card, index) =>
            index < 50 ? (
              <span className="searchItem" key={index} onClick={() => handleClick(card.name)}>
                {card.name},{" "}
              </span>
            ) : index === 50 ? (
              <span className="last">...and more. Refine search to see them.</span>
            ) : null
          )}
        </div>
      ) : props.cardData.length === 1 ? (
        <CardInfo card={props.cardData[0]} addToDeck={props.addToDeck} />
      ) : (
        <h3>{props.error}</h3>
      )}
    </div>
  );
};

const CardInfo = ({ card, addToDeck }) => {
  const [numToAdd, setNumToAdd] = useState("1");
  const handleChange = (e) => {
    console.log("input change");
    setNumToAdd(e.target.value);
  };
  return (
    <div className="card">
      <div className="cardTitle">
        <span>{card.name}</span> <span>{card.mana_cost}</span>
      </div>
      <p>{card.type_line}</p>
      <p>{card.oracle_text}</p>
      <p>{card.power ? `${card.power} / ${card.toughness}` : null}</p>
      <input
        type="number"
        min="1"
        max="4"
        value={numToAdd}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button onClick={() => addToDeck({ name: card.name, number: numToAdd })}>Add to Deck</button>
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

export default connect(mapStateToProps, { getData, addToDeck })(CardDisplay);
