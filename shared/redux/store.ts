import { configureStore } from "@reduxjs/toolkit";
import { sliderReducer } from "./slices";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
