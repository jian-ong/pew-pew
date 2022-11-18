import { configureStore } from "@reduxjs/toolkit";
import playerLocationReducer from "./slices/playerLocationSlice";

export const store = configureStore({
  reducer: {
    playerLocation: playerLocationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
