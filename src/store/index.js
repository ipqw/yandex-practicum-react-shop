import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { reviewsSlice } from "./reviews";

export const store = configureStore({
    reducer: combineReducers({
        book: bookSlice.reducer,
        reviews: reviewsSlice.reducer,
        cart: cartSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})