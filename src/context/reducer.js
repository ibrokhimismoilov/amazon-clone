import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./types";

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

    case REMOVE_FROM_BASKET: {
      const idx = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (idx >= 0) {
        newBasket.splice(idx, 1);
      } else {
        console.warn(`Can't remove (id: ${action.id}) as its not in basket!`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
