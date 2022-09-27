import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './feature/productsSlice';
import getProductIdSlice from './feature/getProductIdSlice';
import cartSlice from './feature/cartSlice';

const store = configureStore({
    reducer :  {
        products : productsSlice,
        getProductId : getProductIdSlice,
        cart : cartSlice
    }
})

export default store

