import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://localhost:3500/products'
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get(BASE_URL);
        return [...response.data]
    }
    catch(err) {
        console.log(err)
    }
})
const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status:'idle',
        error:null
    },
    reducers:{
    
    },
    extraReducers:(builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.products = state.products.concat(action.payload)
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message;
        })
    }
})

export const selectProductById = (state, productId) => state.products.products.find(product => product.id === productId)

export default productsSlice.reducer
