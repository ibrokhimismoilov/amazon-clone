import { ADD_TO_BASKET } from "./types";

export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) => {
  return basket.reduce((summ, item) => {
    return summ + item.price;
  }, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
