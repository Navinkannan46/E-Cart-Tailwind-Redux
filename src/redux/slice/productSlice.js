import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products")
    console.log(result.data.products);
    return result.data.products

})

const productSlice=createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        loading:false,
        erroeMsg:""

    },
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.loading=false
            state.erroeMsg=""
        })
        builder.addCase(fetchProducts.pending,(state,apiResult)=>{
            state.allProducts=[]
            state.loading=true
            state.erroeMsg=""
        })
        builder.addCase(fetchProducts.rejected,(state,apiResult)=>{
            state.allProducts=[]
            state.loading=false
            state.erroeMsg="Api call failed"
        })
    }

})
export default productSlice.reducer
