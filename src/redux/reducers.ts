import { combineReducers } from "redux";

import counter from "redux/slices/counter";
import categoryListReducer from "./slices/categoryList";

const rootReducer = combineReducers({
    counter,
    categoryList: categoryListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
