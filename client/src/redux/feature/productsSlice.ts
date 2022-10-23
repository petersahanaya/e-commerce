import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiProps } from "../../types/Types";

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
            const filtered = action.payload.filter((s : ApiProps) => {
                return s.images[0] !== ""
            })
            return {...state, data : filtered, isLoading : false}
        })
    }
});

export default productSlice.reducer
export const { reset } = productSlice.actions


