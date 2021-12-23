import { RootState } from "./reducers";

export function selectCategoryList(state: RootState) {
    return state.categoryList;
}
