import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './reducers/basketSlice';
import restaurantReducer from "./reducers/restaurantSlice"

const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  }
})

export default store;
