import { ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } from "./actionTypes";

const localCartList = localStorage.getItem("@CARTLIST");

const initialState = localCartList ? JSON.parse(localCartList) : [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const addIndex = state.findIndex(
        (product) => product.id == action.product.id
      );
      if (addIndex != -1) {
        return state.map((product, index) =>
          index == addIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }

    case REMOVE_PRODUCT:
      const removeIndex = state.findIndex(
        (product) => product.id == action.product.id
      );
      if (state[removeIndex].quantity > 1) {
        return state.map((product, index) =>
          index == removeIndex
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else {
        return state.filter((product) => product.id != action.product.id);
      }

    case CLEAR_CART:
      return (state = []);

    default:
      return state;
  }
};
