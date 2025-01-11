import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // action-name:reducer function
        addToCart: (state, actionByComponent) => {
            const existingItem = state.find(item => item?.id === actionByComponent.payload.id)
            if (existingItem) {

            } else {
                state.push({...actionByComponent.payload, quantity: 1,totalPrice:actionByComponent.payload.price})
            }

        }
    }
})