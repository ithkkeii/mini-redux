import { Action } from ".";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "counter/increment":
      return { value: state.value + 1 };
    case "counter/decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
};
