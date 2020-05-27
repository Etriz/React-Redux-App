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

    case actionTypes.EXACT:
      return {
        ...state,
        isFetchingData: false,
        cardData: [action.payload],
        error: "",
      };
    case actionTypes.VIEW:
      return {
        ...state,
        isFetchingData: false,
        cardData: [...action.payload],
        error: "",
      };

    case actionTypes.ADD:
      const addList = state.deckData;
      const addIndex = addList.findIndex((card) => card.name === action.payload.name);
      const addCard = () => {
        if (addIndex === -1) {
          return [...addList, action.payload];
        } else {
          return addList.map((card, index) => {
            if (addList[index] === addList[addIndex]) {
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
      const removeList = state.deckData;
      const removeIndex = removeList.findIndex((card) => card.name === action.payload.name);
      const removeCard = () => {
        return removeList.filter((card, index) => {
          if (removeList[index] === removeList[removeIndex]) {
            return null;
          } else return card;
        });
      };

      return {
        ...state,
        deckData: removeCard(),
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
