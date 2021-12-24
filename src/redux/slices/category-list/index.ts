import { createSlice } from "@reduxjs/toolkit";
import { TCategoryList, TState } from "models";
import { getCategoryListTC } from "./getCategoryList";

const initialState: TState<TCategoryList> = {
  status: 'success',
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategoryListTC.pending, (state, action) => {
        state.errorMsg = undefined;
        state.status = 'pending';
      })
      .addCase(getCategoryListTC.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'success';
      })
      .addCase(getCategoryListTC.rejected, (state, action) => {
        state.errorMsg = action.error.message;
        state.status = 'reject';
      })

  }
});

const categoryListReducer = categoryListSlice.reducer;

// export const { } = categoryListSlice.actions;
export default categoryListReducer;
