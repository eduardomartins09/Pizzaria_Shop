import { configureStore } from "@reduxjs/toolkit";

import modalReducer from './modalSlice'
import cartReducer from './cartSlice'
import filterReducer from './filterSlice'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        cart: cartReducer,
        filter: filterReducer
    }
})

export default store