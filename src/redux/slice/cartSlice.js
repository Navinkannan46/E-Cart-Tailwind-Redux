import { createSlice } from "@reduxjs/toolkit";
import { removeItem } from "./wishlistSlice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // action-name:reducer function
        addToCart: (state, actionByComponent) => {
            const existingProduct = state.find(item => item?.id == actionByComponent.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProducts, existingProduct]
            } else {
                state.push({ ...actionByComponent.payload, quantity: 1, totalPrice: actionByComponent.payload.price })
            }

        },
        incrementQuantity: (state, actionByCart) => {
            const existingProduct = state.find(item => item?.id == actionByCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProducts, existingProduct]

        },
        decrementQuantity: (state, actionByCart) => {
            const existingProduct = state.find(item => item?.id == actionByCart.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProducts, existingProduct]

        },
        removeCartItem:(state,actionByCart)=>{
           return state.filter(item=>item?.id!=actionByCart.payload)
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const { addToCart, incrementQuantity,decrementQuantity,removeCartItem,emptyCart } = cartSlice.actions
export default cartSlice.reducer