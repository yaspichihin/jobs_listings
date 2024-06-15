import { createSlice } from "@reduxjs/toolkit";

// slice
export const positionsSlice = createSlice({
  name: "positions",
  initialState: [],
  reducers: {
    addPositions: (state, action) => {
      return action.payload;
    },
  },
});

// actions
export const { addPositions } = positionsSlice.actions;

// reducer
export const positionsReducer = positionsSlice.reducer;

// selectors
export function selectAllPositions(state) {
  return state.positions;
}

export function selectVisiblePositions(state, filters) {
  if (filters.length === 0) return state.positions;
  return state.positions.filter((pos) => {
    const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
    return filters.every((filter) => posFilters.includes(filter));
  });
}
