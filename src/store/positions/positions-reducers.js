import { ADD_POSITIONS } from "./positions-constants";

export function postionsReducer(state = [], action) {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.payload.positions;
    }
    default: {
      return state;
    }
  }
}
