import { addProduct, removeProduct } from "./actions";

export const addProductThunk = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const removeProductThunk = (product) => (dispatch) => {
  dispatch(removeProduct(product));
};

export const clearCartThunk = () => (dispatch) => {
  dispatch(clearCart());
};
