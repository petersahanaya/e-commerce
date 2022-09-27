import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './feature/productsSlice';
import getProductIdSlice from './feature/getProductIdSlice';
import cartSlice from './feature/cartSlice';
import searchSlice from './feature/searchSlice';

const store = configureStore({
    reducer :  {
        products : productsSlice,
        getProductId : getProductIdSlice,
        cart : cartSlice,
        search : searchSlice
    }
})

export default store

