import { createAsyncThunk, createSlice, CreateSliceOptions } from "@reduxjs/toolkit"
import { ApiProps } from "../../types/Types"

interface StatePropsCart  {
    data : ApiProps[],
    successAdd : boolean,
    successRemove : boolean,
    initialData : ApiProps[] | any
};

const initialState : StatePropsCart = {
    data : [],
    successAdd : false,
    successRemove : false,
    initialData : []
};

export const FetchProductsCart = createAsyncThunk('cart/productCart', async () => {
    return await fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json());
});

const cartSlice = createSlice(<CreateSliceOptions>{
    name : "cart",
    initialState, 
    reducers : {
        reset(state : StatePropsCart){
            return {...state, successAdd : false, successRemove : false}
        },
        removeAll(state : StatePropsCart){
            return {...state, data : []}
        },
        addItem(state : StatePropsCart, {payload}){
            const duplicate = state.data.find((s) => s.id === payload?.id);  
                if(!duplicate)  return {...state, data : [...state.data, payload], successAdd : true};

        },
        removeItem(state : StatePropsCart, {payload}){
            const filtered = state.data.filter((s) => s.id !== payload);

            return {...state, data : filtered, successRemove : true};
        },
        addQuantity(state : StatePropsCart, {payload}){
            const find = state.data.find((s) => s.id === payload);
            const filtered = state.data.filter((s) => s.id !== payload);
            const findInitData = state.initialData.find((s : ApiProps) => s.id === payload);
            if(find) return {...state, data : [...filtered, {...find, price : findInitData.price * find.quantity! ,quantity : find.quantity! + 1}]};
        },
        decreaseQuantity (state : StatePropsCart, {payload}){
            const find = state.data.find((s) => s.id === payload);
            const filtered = state.data.filter((s) => s.id !== payload);
            const findInitData = state.initialData.find((s : ApiProps) => s.id === payload);
            if(find) {
                if(find.quantity === 1){
                    return {...state, data : filtered}
                }else {
                    return {...state, data : [...filtered, {...find, price : findInitData.price - find.price || findInitData.price ,quantity : find.quantity! - 1}]};
                }
            };
        }
    },
    extraReducers(builder) {
        builder.addCase(FetchProductsCart.fulfilled, (state : StatePropsCart, {payload}) => {
            return {...state, initialData : payload}
        })
    },
});

export default cartSlice.reducer;
export const { removeAll, addQuantity, addItem, removeItem, reset, decreaseQuantity} = cartSlice.actions;