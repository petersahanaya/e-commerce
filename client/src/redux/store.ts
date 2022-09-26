import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './feature/productsSlice';
import getProductIdSlice from './feature/getProductIdSlice';

const store = configureStore({
    reducer :  {
        products : productsSlice,
        getProductId : getProductIdSlice
    }
})

export default store

