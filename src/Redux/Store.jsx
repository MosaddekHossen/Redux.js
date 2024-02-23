import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counters/CounterSlice";

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
