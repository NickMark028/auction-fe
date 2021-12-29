import { combineReducers } from "redux";

import counter from "redux/slices/counter";
import categoryListReducer from "./slices/category-list";
import productSearchListReducer from "./slices/product-search-list";

const rootReducer = combineReducers({
  counter,
  categoryList: categoryListReducer,
  productSearchList: productSearchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
