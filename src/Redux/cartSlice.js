// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [], // Start with an empty array to represent an empty cart
    reducers: {
        addItem: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else if (action.payload.quantity > 0) {
                const newItem = {
                    id: action.payload.id,
                    brand: action.payload.brand,
                    title: action.payload.title,
                    price: action.payload.price,
                    discount: action.payload.discount,
                    quantity: action.payload.quantity,
                    thumbnail: action.payload.thumbnail,
                };
                state.push(newItem);
            }
        },
        deleteItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) state.splice(index, 1); // Mutate state directly with splice
        },
    },
});

export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
