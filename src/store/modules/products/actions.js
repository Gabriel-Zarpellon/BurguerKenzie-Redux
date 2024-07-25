import { GET_PRODUCTS, SEARCH_PRODUCT } from "./actionTypes";

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  products: products,
});

export const searchProduct = (productName) => ({
  type: SEARCH_PRODUCT,
  name: productName,
})