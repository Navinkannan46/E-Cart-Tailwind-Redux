import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const result = await axios.get("https://dummyjson.com/products")
    sessionStorage.setItem("allproducts", JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        dummyAllProducts:[],
        loading: false,
        erroeMsg: ""
    },
    reducers: {
        searchProduct: (state, actionByHeader) => {
            state.allProducts = state.dummyAllProducts.filter(item => item?.title.toLowerCase().includes(actionByHeader.payload))
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, apiResult) => {
            state.allProducts = apiResult.payload;
            state.dummyAllProducts = apiResult.payload;
            state.loading = false;
            state.erroeMsg = "";
        });
        builder.addCase(fetchProducts.pending, (state) => {
            state.allProducts = [];
            state.dummyAllProducts = [];
            state.loading = true;
            state.erroeMsg = "";
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.allProducts = [];
            state.dummyAllProducts = [];
            state.loading = false;
            state.erroeMsg = "Api call failed";
        });
    }

})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer
