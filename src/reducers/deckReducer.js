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
        error: "",
      };

    case actionTypes.ADD:
      const currentDecklist = state.deckData;
      const newIndex = currentDecklist.findIndex((card) => card.name === action.payload.name);
      const addCard = () => {
        if (newIndex === -1) {
          return [...currentDecklist, action.payload];
        } else {
          return currentDecklist.map((card, index) => {
            if (currentDecklist[index] === currentDecklist[newIndex]) {
              return action.payload;
            } else return card;
          });
        }
      };
      return {
        ...state,
        deckData: addCard(),
      };
    case actionTypes.REMOVE:
      return {
        ...state,
        deckData: state.deckData,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        isFetchingData: false,
        cardData: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default deckReducer;
