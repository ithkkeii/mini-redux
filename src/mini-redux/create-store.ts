export const createStore = (reducer: any) => {
  let currentState: any;

  const dispatch = (action: any) => {
    currentState = reducer(currentState, action);
  };

  return {
    currentState,
    dispatch,
  };
};
