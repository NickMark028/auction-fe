import { createSlice } from "@reduxjs/toolkit";
import { TProductSearchList, TState } from "models";
import { addThunkBuilderCases } from "redux/thunk";
import { searchProductTC } from "./searchProduct";

const initialState: TState<TProductSearchList> = {
    status: 'success',
};

const productSearchList = createSlice({
    name: "productSearchList",
    initialState,
    reducers: {},
    extraReducers(builder) {
        addThunkBuilderCases(builder, searchProductTC);
        // builder
        //     .addCase(searchProductTC.pending, (state, action) => {
        //         state.errorMsg = undefined;
        //         state.status = 'pending';
        //     })
        //     .addCase(searchProductTC.fulfilled, (state, action) => {
        //         state.data = action.payload;
        //         state.status = 'success';
        //     })
        //     .addCase(searchProductTC.rejected, (state, action) => {
        //         state.errorMsg = action.payload;
        //         state.status = 'reject';
        //     })
    }
});

const productSearchListReducer = productSearchList.reducer;

// export const { } = categoryListSlice.actions;
export default productSearchListReducer;
