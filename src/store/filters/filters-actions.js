import { ADD_FILTER, DEL_FILTER } from "./filters-constants";

export function addFilter(filter) {
  return {
    type: ADD_FILTER,
    payload: {
      filter,
    },
  };
}

export function delFilter(filter) {
  return {
    type: DEL_FILTER,
    payload: {
      filter,
    },
  };
}

export function rstFilter() {
  return {
    type: DEL_FILTER,
    payload: {},
  };
}
