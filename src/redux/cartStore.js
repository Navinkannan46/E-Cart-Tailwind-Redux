import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/productSlice'
const cartStore = configureStore({
    reducer: {
        productReducer
    }
})
export default cartStore