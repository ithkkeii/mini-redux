export const createStore = (reducer: any) => {
  let currentState: any;

  const getState = () => currentState;

  const dispatch = (action: any) => {
    currentState = reducer(currentState, action);
  };

  // Be sure that not same as any user's dispatch
  dispatch({ type: "@@redux/INIT$" });

  return {
    dispatch,
    getState,
  };
};
