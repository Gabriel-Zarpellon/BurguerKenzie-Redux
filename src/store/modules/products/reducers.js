import { GET_PRODUCTS, SEARCH_PRODUCT } from "./actionTypes";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
     return action.products;

    case SEARCH_PRODUCT:
      return state.filter((product) =>
        product.name.toLowerCase().includes(action.name.toLowerCase())
      );

    default:
      return state;
  }
};
