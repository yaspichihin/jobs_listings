import { combineReducers } from "redux";

import { postionsReducer } from "./positions/positions-reducers";
import { filtersReducer } from "./filters/filters-reducers";

export const rootReducer = combineReducers({
  positions: postionsReducer,
  filters: filtersReducer,
});
