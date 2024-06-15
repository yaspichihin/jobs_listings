import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./features/filters/filters-slice";
import { positionsReducer } from "./features/positions/positions-slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    positions: positionsReducer,
  },
  devTools: true,
});
