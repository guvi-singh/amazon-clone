import { red } from "@mui/material/colors";
export const initialState = {
  basket: [],
  // totalPrice: 0,
};
export var getBasketTotal = function getBasketTotal(basket) {
  return basket
    ? basket.reduce(function (amount, item) {
        return item.price + amount;
      }, 0)
    : 0;
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Calculate the new total price by adding the price of the item
      const newTotalPrice = state.totalPrice + action.item.price;

      return {
        ...state,
        basket: [...state.basket, action.item],
        totalPrice: newTotalPrice,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
