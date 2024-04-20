import { ADD_POSITIONS } from "./positions-constants";

export function addPositions(positions) {
  return {
    type: ADD_POSITIONS,
    payload: {
      positions,
    },
  };
}
