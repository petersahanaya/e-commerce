import { createSlice } from "@reduxjs/toolkit"
import { ApiProps } from "../../types/Types"

interface StatePropsCart  {
    data : ApiProps[],
    successAdd : boolean,
    successRemove : boolean
};

const initialState : StatePropsCart = {
    data : [],
    successAdd : false,
    successRemove : false
};

const cartSlice = createSlice({
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
            const duplicate = state.data.find((s) => s.id === payload.id);
            if(!duplicate)  return {...state, data : [...state.data, payload], successAdd : true};
        },
        removeItem(state, {payload}){
            const filtered = state.data.filter((s) => s.id !== payload);

            return {...state, data : filtered, successRemove : true};
        }
    }
});

export default cartSlice.reducer;
export const { removeAll, addItem, removeItem, reset } = cartSlice.actions;