import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "./slices/counterSlice";


export const store = configureStore({
  reducer: {
counter : counterReducer
  },
});

export const  RootState =  store.dispatch