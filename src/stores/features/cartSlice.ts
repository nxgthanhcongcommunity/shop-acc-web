import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICartItem {
    id: number;
    code: string;
    name: string;
    price: number;
    quantity: number;
    mainFileUrl: string;
}

interface ICartState {
    items: ICartItem[];
    toggle: boolean;
}

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState == null) {
            return { toggle: false, items: [] } as ICartState;
        }
        return JSON.parse(serializedState) as ICartState;
    } catch (err) {
        console.log(err);
        return { toggle: false, items: [] } as ICartState;
    }
}

const initialState: ICartState = loadState();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const item = state.items.find(item => item.code === action.payload.code);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push(action.payload);
            }
            saveState(state);
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.code !== action.payload);
            saveState(state);
        },
        clearCart: (state) => {
            state.items = [];
            saveState(state);
        },
        updateItemQuantity: (state, action: PayloadAction<{ code: string, quantity: number }>) => {

            const newArray = state.items.map((item) => {
                if (item.code === action.payload.code) {
                    return { ...item, quantity: action.payload.quantity };
                } else {
                    return item;
                }
            })

            state.items = newArray;
            saveState(state);
        }
    }
})

const saveState = (state: ICartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (err) {

    }
};

export const {
    addItem,
    removeItem,
    clearCart,
    updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;