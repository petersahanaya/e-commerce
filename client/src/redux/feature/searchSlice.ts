import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiProps } from "../../types/Types";

interface StateProps {
    isLoading : boolean,
    data : ApiProps[]
}

const initialState : StateProps = {
    isLoading : false,
    data : []
}

export const SearchProduct = createAsyncThunk('search/products', async () => {
    return await fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json());
})

const searchSlice = createSlice({
    name : "search",
    initialState,
    reducers : {},
    extraReducers (builder){
        builder.addCase(SearchProduct.pending, (state) => {
            return {...state, isLoading : true}
        }),
        builder.addCase(SearchProduct.fulfilled, (state, {payload}) => {
            return {...state, data : payload}
        })
    }
});

export default searchSlice.reducer;