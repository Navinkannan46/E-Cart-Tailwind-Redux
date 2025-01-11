import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // action-name:reducer function
        addToCart: (state, actionByComponent) => {
            const existingProduct = state.find(item => item?.id == actionByComponent.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.totalPrice
                const remainingProducts = state.filter(item => item.id != existingProduct.id)
                state = [...remainingProducts, existingProduct]
            } else {
                state.push({ ...actionByComponent.payload, quantity: 1, totalPrice: actionByComponent.payload.price })
            }

        },
        incrementQuantity: (state, actionByComponent) => {
            const existingProduct = state.find(item => item?.id == actionByComponent.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.totalPrice
            const remainingProducts = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProducts, existingProduct]

        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer