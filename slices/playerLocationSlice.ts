import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type PlayerLocation = {
  x: number;
  y: number;
};

const initialState: PlayerLocation = {
  x: 3,
  y: 3,
};

export const playerLocationSlice = createSlice({
  name: "playerLocation",
  initialState,
  reducers: {
    moveUp: (state) => {
      state.y += 1;
    },
    moveDown: (state) => {
      state.y -= 1;
    },
    moveLeft: (state) => {
      state.x += 1;
    },
    moveRight: (state) => {
      state.x -= 1;
    },
  },
});

export const { moveUp, moveDown, moveLeft, moveRight } =
  playerLocationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlayerLocation = (state: RootState) => [
  state.playerLocation.x,
  state.playerLocation.y,
];

export default playerLocationSlice.reducer;
