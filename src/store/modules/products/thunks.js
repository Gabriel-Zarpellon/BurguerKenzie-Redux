import { api } from "../../../services/api";
import { getProducts, searchProduct } from "./actions";

const localProductList = localStorage.getItem("@PRODUCTLIST");

export const getProductsThunk = () => async (dispatch) => {
  if (localProductList) {
    dispatch(getProducts(JSON.parse(localProductList)));
  } else {
    try {
      const { data } = await api.get("/products");
      dispatch(getProducts(data));
      localStorage.setItem("@PRODUCTLIST", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }
};

export const searchProductThunk = (productName) => async (dispatch) => {
  if (productName == "") {
    dispatch(getProductsThunk());
  } else {
    dispatch(searchProduct(productName));
  }
};
