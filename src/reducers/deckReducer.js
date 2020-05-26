import { actionTypes } from "../actions/actions";

const initialState = {
  isFetchingData: false,
  cardData: [],
  deckData: [],
  error: "",
};

export const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET:
      return {
        ...state,
        isFetchingData: true,
      };

    case actionTypes.VIEW:
      return {
        ...state,
        isFetchingData: false,
        cardData: [...action.payload],
      };

    // case actionTypes.ADD:
    //   return state;
    // case actionTypes.ERROR:
    //   return state;

    default:
      return state;
  }
};

export default deckReducer;
