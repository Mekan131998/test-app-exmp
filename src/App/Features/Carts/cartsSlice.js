import { createSlice } from '@reduxjs/toolkit'

const cartsSlice = createSlice({
    name:'carts',
    initialState:{
        cartItems:[],
        totalQty:0,
    },
    reducers:{
        addToCartItem:(state, action) => {
            const existingItem = state.cartItems.find(cart => cart.id === action.payload.id)
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price
            } else {
                state.cartItems.push({
                    id:action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    img: action.payload.images[0],
                    quantity: 1,
                    totalPrice: action.payload.price
                })
                state.totalQty++;
            }
        },
        incrementCartItem:(state, action) => {
            const Id = action.payload
            state.cartItems.map(cartItem =>{
                if(cartItem.id === Id) {
                    cartItem.quantity++;
                    cartItem.totalPrice+=cartItem.price
                    return cartItem
                } else {
                    return cartItem
                }
            })
        },
        decrementCartItem:(state, action) => {
            const Id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === Id)
            if(existingItem.quantity !== 1) {
                existingItem.quantity--;
                existingItem.totalPrice-=existingItem.price
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== Id)
                state.totalQty--;
            }
        },
        removeToCartItems:(state, action) => {
            state.carts = state.carts.filter(cartItem => cartItem.id !== action.payload)
        }
    }
})

export const { addToCartItem, incrementCartItem, decrementCartItem, removeToCartItems } = cartsSlice.actions
export default cartsSlice.reducer