import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "../Carts/cartsSlice";
import productsSlice from "../Products/productsSlice";

export const store = configureStore({
    reducer:{
        products:productsSlice,
        carts: cartsSlice,
    }
})