import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProductDetails, TProductDetailsList } from "models";
import { ThunkOption } from "redux/thunk";
import axiosClient from "utils/axiosClient";

export const getProductDetailsTC = createAsyncThunk<TProductDetailsList, number , ThunkOption>(
    'TProductDetails/getProductDetailsList',
    async function getProductDetails(id, thunkAPI) {
        try {
            const response = await axiosClient.get(`api/product/detailproduct/${id}`);
            return response.data as TProductDetailsList;
        }
        catch (e) {
            return thunkAPI.rejectWithValue('Something wrong here');
        }
    }
)
