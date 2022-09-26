import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiProps } from "../../types/Types";

interface StateProps {
    isLoading : boolean,
    data : ApiProps | {}
}

const initialState : StateProps  = {
    isLoading : false,
    data : {}
};

export const fetchProductId = createAsyncThunk('productId/fetchProductId',async (value : number | string) => {
    return await fetch(`https://api.escuelajs.co/api/v1/products/${value}`).then((res) => res.json());
})

const getProductIdSlice = createSlice({
    name : 'productId',
    initialState, 
    reducers : {
        reset(){
            return {isLoading : false, data : {}}
        },
        increaseQuantity (state : StateProps, action){
            return {...state, data : {...state.data, quantity : action.payload}};
        },
        decreaseQuantity (state, action){
            return {...state, data : {...state.data, quantity : action.payload}};
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProductId.pending, (state) => {
            return {...state, isLoading : true}
        }),
        builder.addCase(fetchProductId.fulfilled, (state, action) => {
            let data = action.payload;
            data.quantity = 0;
            return {...state, data, isLoading : false}
        })
    },
});

export default getProductIdSlice.reducer;
export const { reset, increaseQuantity, decreaseQuantity } = getProductIdSlice.actions;