import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart", 
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
        
    },
    reducers:{
        addProduct: (state, action) =>{
            state.quantity +=1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        incrementQuantity: (state, action) =>{
            const item = state.products.find((product) => product._id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) =>{
            const item = state.products.find((product) => product._id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },

        removeProduct:(state, action)=>{
            const removeProduct = state.products.filter((product) => product._id !== action.payload);
            state.products = removeProduct;
            state.quantity--;
        },
    },
});

export const {addProduct, removeProduct, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
