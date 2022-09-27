import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiProps } from "../../types/Types";

interface StateProps {
    isLoading : boolean,
    data : ApiProps | any,
    initiatData : ApiProps | any,
    successAdd : boolean
}

const initialState : StateProps  = {
    isLoading : false,
    data : {},
    initiatData : {},
    successAdd : false
};

export const fetchProductId = createAsyncThunk('productId/fetchProductId',async (value : number | string) => {
    return await fetch(`https://api.escuelajs.co/api/v1/products/${value}`).then((res) => res.json());
})

const getProductIdSlice = createSlice({
    name : 'productId',
    initialState, 
    reducers : {
        reset(state){
            return {...state, successAdd : false}
        },
        increaseQuantity (state : StateProps){
            let multiplePrice = state.data?.quantity * state.initiatData?.price;
            return {...state, data : {...state.data, price : multiplePrice, quantity : state.data?.quantity + 1}};
        },
        decreaseQuantity (state : StateProps){
            let decreasePrice = state?.data?.price - state?.initiatData?.price;
            console.log(state.initiatData.price);
                return {...state, data : {...state.data, price : decreasePrice || state.initiatData.price, quantity : state.data?.quantity - 1}};
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProductId.pending, (state) => {
            return {...state, isLoading : true}
        }),
        builder.addCase(fetchProductId.fulfilled, (state, action) => {
            let data = action.payload;
            data.quantity = 1;
            return {...state, data, initiatData : data, price : data?.price, isLoading : false}
        })
    },
});

export default getProductIdSlice.reducer;
export const { reset, increaseQuantity, decreaseQuantity } = getProductIdSlice.actions;