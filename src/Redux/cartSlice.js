import { createSlice } from "@reduxjs/toolkit";
import productInfos from "../Data/productInfos";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [{ ...productInfos }],
    reducers: {
        addItem: (state, action) => {
            const item = state.find((item) => item.id === action.payload.id);
            if (item && item !== -1) {
                item.quantity = item.quantity + action.payload.quantity;
            } else if (action.payload.quantity !== 0){
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
            } else {
                return;
            }
        },
        deleteItem: (state, action) => {
            state = state.filter((item) => item.id !== action.payload);
            return state;
        },
    },
});
