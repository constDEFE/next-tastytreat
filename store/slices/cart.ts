import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { cacheItems } from "@/utils/cache";

const initialState: CartState = {
	items: [],
	totalPrice: 0,
	totalQuantity: 0
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setState: (state, action: PayloadAction<CartState>) => {
			state.items = action.payload.items;
			state.totalPrice = action.payload.totalPrice;
			state.totalQuantity = action.payload.totalQuantity;
		},
		addItem: (state, action: PayloadAction<Food>) => {
			const newItem = action.payload;
			const exists = state.items.find((item) => item.id === newItem.id);

			state.totalQuantity++;

			if (!exists) {
				state.items.push({
					...newItem,
					quantity: 1,
					totalPrice: newItem.price
				});
			} else {
				exists.quantity++;
				exists.totalPrice = exists.totalPrice + newItem.price;
			}

			state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

			cacheItems(state.items, state.totalPrice, state.totalQuantity);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const exists = state.items.find((item) => item.id === id)!;

			state.totalQuantity--;

			if (exists.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				exists.quantity--;
				exists.totalPrice = Number(exists.totalPrice) - Number(exists.price);
			}

			state.totalPrice = state.items.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

			cacheItems(state.items, state.totalPrice, state.totalQuantity);
		},
		removeAllItems: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);

			if (existingItem) {
				state.items = state.items.filter((item) => item.id !== id);
				state.totalQuantity = state.totalQuantity - existingItem.quantity;
			}

			state.totalPrice = state.items.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

			cacheItems(state.items, state.totalPrice, state.totalQuantity);
		}
	}
});

export const { setState, addItem, removeItem, removeAllItems } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
