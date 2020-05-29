import axios from "axios";

export const actionTypes = {
  LOCAL: "LOCAL_STORAGE",
  GET: "GET_DATA",
  EXACT: "GET_EXACT_DATA",
  VIEW: "VIEW_CARD",
  ADD: "ADD_CARD",
  REMOVE: "REMOVE_CARD",
  ERROR: "SET_ERROR",
  CLEAR: "CLEAR_ALL",
};

export const getData = (value) => (dispatch) => {
  dispatch({ type: actionTypes.GET });
  axios
    .get(`https://api.scryfall.com/cards/search?q=${value}`)
    .then((res) => {
      // console.log("search", res.data);
      const cardData = res.data.data;
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
export const getExactData = (value) => (dispatch) => {
  dispatch({ type: actionTypes.GET });
  axios
    .get(`https://api.scryfall.com/cards/named?fuzzy=${value}`)
    .then((res) => {
      // console.log("exact", res.data);
      const cardData = res.data;
      dispatch({ type: actionTypes.EXACT, payload: cardData });
    })
    .catch((err) => {
      console.error("API fetch error", err);
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
export const removeFromDeck = (value) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE, payload: value });
};
export const clearAll = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR });
};
export const getLocalStorage = (value) => (dispatch) => {
  dispatch({ type: actionTypes.LOCAL, payload: value });
};
