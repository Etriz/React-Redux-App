import axios from "axios";

export const actionTypes = {
  GET: "GET_DATA",
  VIEW: "VIEW_CARD",
  ADD: "ADD_CARD",
  REMOVE: "REMOVE_CARD",
  ERROR: "SET_ERROR",
};

export const getData = (value) => (dispatch) => {
  dispatch({ type: actionTypes.GET });
  axios
    .get(`https://api.scryfall.com/cards/search?q=${value}`)
    .then((res) => {
      console.log(res.data);
      //   const numberOfCards = res.data.total_cards;
      const cardData = res.data.data;
      //   const cardInfo = () => {
      //     return numberOfCards > 1 ? { total_cards: numberOfCards } : cardData;
      //   };
      dispatch({ type: actionTypes.VIEW, payload: cardData });
    })
    .catch((err) => {
      console.error("API fetch error", err.response.data);
      const message = () => {
        if (err.response.status === 404 || err.response.status === 400) {
          return "Your search didn't match any cards.";
        } else return "Something went wrong. Please try again later.";
      };
      dispatch({ type: actionTypes.ERROR, payload: message() });
    });
};
export const addToDeck = (value) => (dispatch) => {
  dispatch({ type: actionTypes.ADD, payload: value });
};
