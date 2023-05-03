import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
        state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);

        let newBasket = [...state.items];

        if(index >= 0){
          newBasket.splice(index, 1);
        }else{
          console.warn(
            `Cant remove product {id: ${action.payload.id}} as it is not in basket!`
          )
        }
        state.items = newBasket;
    }
  },
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export default basketSlice.reducer;