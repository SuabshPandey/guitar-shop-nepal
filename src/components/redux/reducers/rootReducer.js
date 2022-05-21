import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./reducers";

const allReducers = combineReducers({
  cartReducer: cartReducer,
  productReducer: productReducer,
});

export default allReducers;
