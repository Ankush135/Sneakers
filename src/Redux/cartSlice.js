import { createSlice } from "@reduxjs/toolkit";
import productInfos from "../Data/productInfos";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [{ ...productInfos }],
    reducers: {
        addItem: (state, action) => {
            // On vérifie si l'item est déjà présent dans le panier
            const item = state.find((item) => item.id === action.payload.id);
            if (item && item !== -1) {
                // Si oui, on incrémente sa quantité
                item.quantity = item.quantity + action.payload.quantity;
            } else if (action.payload.quantity !== 0){
                // Sinon si la quantité à ajouter est différente de 0 on ajoute l'article
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
                // Sinon on ne fait rien
                return;
            }
        },
        deleteItem: (state, action) => {
            // On supprime l'élément cible de notre panier en filtrant celui-ci
            state = state.filter((item) => item.id !== action.payload);
            return state;
        },
    },
});
