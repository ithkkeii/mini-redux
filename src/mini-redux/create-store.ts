export const createStore = (reducer: any) => {
  let currentState: any;
  // let listeners: any[] = [];
  // Why we need using array here ?
  let x: any;

  const getState = () => currentState;

  const subscribe = (listener: any) => {
    // listeners.push(listener);
    x = listener;
  };

  const dispatch = (action: any) => {
    currentState = reducer(currentState, action);
    // listeners.map((l) => l());
    if (x) x();
  };

  // Be sure that not same as any user's dispatch
  dispatch({ type: "@@redux/INIT$" });

  return {
    dispatch,
    getState,
    subscribe,
  };
};
