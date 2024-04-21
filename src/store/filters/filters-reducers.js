import { ADD_FILTER, DEL_FILTER, RST_FILTER } from "./filters-constants";

export function filtersReducer(state = [], action) {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.payload.filter)) return [...state, action.payload.filter];
      return state;
    }
    case DEL_FILTER: {
      return state.filter((filter) => filter !== action.payload.filter);
    }
    case RST_FILTER: {
      return [];
    }
    default: {
      return state;
    }
  }
}
