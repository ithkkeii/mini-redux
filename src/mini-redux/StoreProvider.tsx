import React, { useState } from "react";

export const StoreContext = React.createContext({});

interface Props {
  children?: React.ReactChild;
  store: any;
}

const StoreProvider: React.FC<Props> = (props) => {
  const { children, store } = props;

  const [reduxStore, setReduxStore] = useState(store.getState());

  return (
    <StoreContext.Provider value={reduxStore}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
