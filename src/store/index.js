import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from "./modules/products/reducers";
import { thunk } from "redux-thunk";
import { cartReducer } from "./modules/cart/reducers";

const reducers = combineReducers({ products: productsReducer, cart: cartReducer });
export const store = createStore(reducers, applyMiddleware(thunk));
