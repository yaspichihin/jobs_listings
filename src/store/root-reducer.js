import { combineReducers } from "redux";

import { postionsReducer } from "./positions/positions-reducer";

export const rootReducer = combineReducers({
  positions: postionsReducer,
});
