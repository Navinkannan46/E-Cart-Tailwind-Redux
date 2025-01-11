import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist: (state, actionFromView) => {
            state.push(actionFromView.payload)
        },
        removeItem: (state, actionFromView)=>{
           return state.filter(item=>item?.id!==actionFromView.payload)
        }
            
        
    }
})

export const { addToWishlist,removeItem} = wishListSlice.actions
export default wishListSlice.reducer