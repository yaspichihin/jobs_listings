import { createSlice } from "@reduxjs/toolkit";

// slice
const filtersSlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    delFilter: (state, action) => {
      return state.filter((filter) => filter !== action.payload);
    },
    rstFilters: (state, action) => {
      return [];
    },
  },
});

// actions
export const { addFilter, delFilter, rstFilters } = filtersSlice.actions;

// reducer
export const filtersReducer = filtersSlice.reducer;

// selectors
export function selectFilters(state) {
  return state.filters;
}
