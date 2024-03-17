import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/Counters/CounterSlice";
import logger from "./Meddlewares/Logger";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
