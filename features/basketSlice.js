import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        console.log(action.payload);
        state.items = [...state.items, action.payload]
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
       
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      console.log(action.payload);
      console.log(index);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`can't remove item ${id} from basket`);
      }
      state.items = newBasket;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems = (state) => state.basket.items;
//export const selectBasketItemWithItemId = (state, id) => state.basket.items.filter((item) => item.id === id);
export const selectBasketItemWithItemId = (state, id) => state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0);
export default basketSlice.reducer;