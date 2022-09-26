import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
    data : [],
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (value : string) => {
    try{
        return await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${value}`).then((res) => res.json());
    }catch(err){

    }
})

const productSlice = createSlice({
    name : 'products',
    initialState, 
    reducers : {
        reset(){
            return {isLoading : false, data : [], isError : null}
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            return {...state, isLoading : true}
        }),
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return {...state, data : action.payload, isLoading : false}
        })
    }
});

export default productSlice.reducer
export const { reset } = productSlice.actions


